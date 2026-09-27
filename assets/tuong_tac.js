/* Khối TƯƠNG TÁC (2D/3D, đổi số liệu) cho web bài học ML Level 1.
 * Mỗi khối là window.ML1_TT[<loại>](k, el) -> phần tử DOM; app.js gọi khi gặp k.t chưa có sẵn.
 * Mọi số liệu trong khối đều do notebook/script chạy thật tính trước (data.js), trang chỉ hiển thị.
 *
 *  tra_bang        thanh trượt qua các mốc đã tính sẵn -> số lớn + biểu đồ đường/cột (+ phân bố tuỳ chọn)
 *  du_doan_tu      gõ một từ -> xác suất từ tiếp theo (đếm cặp từ), nút "máy viết tiếp"
 *  phan_tan_3d     điểm 3D xoay được (Plotly, tải khi cần), chọn cột cho 3 trục
 *  loc_bang        chọn điều kiện lọc + phép tính -> kết quả và dòng lệnh pandas tương ứng
 *  histogram       thanh trượt số cột (bins) -> histogram vẽ lại
 *  chay_tung_dong  chạy code Python từng dòng: dòng đang chạy, bảng biến, màn hình in
 */
(function () {
  "use strict";
  var CSS = getComputedStyle(document.documentElement);
  function v(n, d) { var x = CSS.getPropertyValue(n).trim(); return x || d; }
  var MAU = { chinh: v("--xanh-tuoi", "#2563EB"), dam: v("--xanh", "#0F172A"), teal: v("--teal", "#0D9488"),
    vang: "#F59E0B", xam: "#94A3B8", vien: v("--vien", "#E2E8F0"), chu: v("--chu", "#0F172A"),
    phu: v("--chu-phu", "#475569") };
  var BANG_MAU = [MAU.chinh, MAU.vang, MAU.teal, "#DC2626", "#7C3AED", "#64748B"];
  var FONT = '"Be Vietnam Pro", "Segoe UI", sans-serif';
  function so(x, d) { return Number(x).toFixed(d === undefined ? 1 : d).replace(".", ","); }
  var el;

  function khung(k, loai) {
    var o = el("div", { class: "demo tt tt-" + loai }, [el("div", { class: "tieu-de-hop", text: "Tự thử: " + k.tieu_de })]);
    if (k.huong_dan) o.appendChild(el("p", { html: k.huong_dan }));
    return o;
  }
  function canvas(w, h) {
    var c = el("canvas", { class: "tt-ve", width: w * 2, height: h * 2 });
    c.style.width = "100%"; c.style.maxWidth = w + "px"; c.style.aspectRatio = w + " / " + h;
    var g = c.getContext("2d"); g.scale(2, 2);
    return { c: c, g: g, w: w, h: h };
  }
  // Trục + lưới cho vùng vẽ; trả về hàm đổi toạ độ.
  function truc(cv, xmin, xmax, ymin, ymax, nhanX, nhanY, vachY) {
    var g = cv.g, L = 52, R = 14, T = 12, B = 48, W = cv.w - L - R, H = cv.h - T - B;
    g.clearRect(0, 0, cv.w, cv.h);
    g.font = "12px " + FONT; g.fillStyle = MAU.phu; g.strokeStyle = MAU.vien; g.lineWidth = 1;
    (vachY || []).forEach(function (y) {
      var py = T + H - (y - ymin) / (ymax - ymin) * H;
      g.beginPath(); g.moveTo(L, py); g.lineTo(L + W, py); g.stroke();
      g.textAlign = "right"; g.fillText(so(y, y % 1 ? 1 : 0), L - 6, py + 4);
    });
    g.strokeStyle = MAU.xam; g.beginPath(); g.moveTo(L, T); g.lineTo(L, T + H); g.lineTo(L + W, T + H); g.stroke();
    g.textAlign = "center"; g.fillText(nhanX || "", L + W / 2, cv.h - 6);
    g.save(); g.translate(13, T + H / 2); g.rotate(-Math.PI / 2); g.fillText(nhanY || "", 0, 0); g.restore();
    return { x: function (x) { return L + (x - xmin) / (xmax - xmin) * W; },
             y: function (y) { return T + H - (y - ymin) / (ymax - ymin) * H; }, L: L, T: T, W: W, H: H };
  }
  function vachDeu(lo, hi, n) { var a = [], b = (hi - lo) / n; for (var i = 0; i <= n; i++) a.push(+(lo + i * b).toFixed(6)); return a; }

  // ---------------------------------------------------------------- tra_bang
  function traBang(k) {
    var o = khung(k, "tra-bang");
    var n = k.khoa.length, r = el("input", { type: "range", min: 0, max: n - 1, step: 1, value: k.bat_dau || 0, "aria-label": k.nhan_truot });
    var nhan = el("div", { class: "thong-bao" }), lon = el("div", { class: "tt-so-lon" }), ghi = el("p", { class: "tt-ghi" });
    var cv = canvas(640, 260), cv2 = k.phan_bo ? canvas(640, 220) : null;
    o.appendChild(nhan); o.appendChild(r); o.appendChild(lon); o.appendChild(cv.c);
    if (cv2) { o.appendChild(el("p", { class: "tt-nhan-phu", html: k.nhan_phan_bo || "" })); o.appendChild(cv2.c); }
    o.appendChild(ghi);
    var ymin = k.ymin !== undefined ? k.ymin : 0, ymax = k.ymax !== undefined ? k.ymax : Math.max.apply(null, k.so) * 1.1;
    function ve() {
      var i = +r.value, t = truc(cv, -0.5, n - 0.5, ymin, ymax, k.truc_x, k.truc_y, vachDeu(ymin, ymax, 4)), g = cv.g;
      nhan.innerHTML = (k.nhan_truot || "") + ": <b>" + k.khoa[i] + "</b>";
      lon.innerHTML = "<span>" + (k.nhan_so || "") + "</span><b>" + so(k.so[i], k.so_le === undefined ? 1 : k.so_le) + (k.don_vi || "") + "</b>";
      ghi.innerHTML = k.ghi ? (k.ghi[i] || "") : "";
      g.textAlign = "center"; g.fillStyle = MAU.phu; g.font = "12px " + FONT;
      k.khoa.forEach(function (kk, j) { g.fillText(String(kk), t.x(j), t.T + t.H + 16); });
      if (k.kieu === "cot") {
        k.so.forEach(function (s, j) {
          var bw = t.W / n * 0.62; g.fillStyle = j === i ? MAU.chinh : "#BFDBFE";
          g.fillRect(t.x(j) - bw / 2, t.y(s), bw, t.y(ymin) - t.y(s));
        });
      } else {
        g.strokeStyle = MAU.chinh; g.lineWidth = 2.5; g.beginPath();
        k.so.forEach(function (s, j) { var px = t.x(j), py = t.y(s); j ? g.lineTo(px, py) : g.moveTo(px, py); }); g.stroke();
        k.so.forEach(function (s, j) {
          g.beginPath(); g.arc(t.x(j), t.y(s), j === i ? 7 : 4, 0, 7);
          g.fillStyle = j === i ? MAU.vang : MAU.chinh; g.fill();
        });
      }
      if (cv2) {
        var pb = k.phan_bo[i], m = pb.gia_tri.length, top = Math.max.apply(null, pb.gia_tri.concat([1])) * 1.15;
        var t2 = truc(cv2, -0.5, m - 0.5, 0, top, k.truc_x_phu || "", k.truc_y_phu || "", vachDeu(0, top, 3)), g2 = cv2.g;
        pb.gia_tri.forEach(function (s, j) {
          var bw = t2.W / m * 0.6; g2.fillStyle = (pb.to || []).indexOf(j) >= 0 ? MAU.vang : MAU.chinh;
          g2.fillRect(t2.x(j) - bw / 2, t2.y(s), bw, t2.y(0) - t2.y(s));
          g2.fillStyle = MAU.phu; g2.textAlign = "center"; g2.fillText(String(pb.nhan[j]), t2.x(j), t2.T + t2.H + 16);
          if (s) { g2.fillStyle = MAU.chu; g2.fillText(String(s), t2.x(j), t2.y(s) - 5); }
        });
      }
    }
    r.addEventListener("input", ve); ve();
    return o;
  }

  // ---------------------------------------------------------------- du_doan_tu
  function duDoanTu(k) {
    var o = khung(k, "du-doan-tu");
    var ip = el("input", { type: "text", value: k.mac_dinh || "", placeholder: "Gõ một từ, ví dụ: trời", "aria-label": "từ đầu vào" });
    var goi = el("div", { class: "tt-goi-y" }, (k.goi_y || []).map(function (w) {
      return el("button", { type: "button", class: "tt-chip", text: w, onclick: function () { ip.value = w; ve(); } });
    }));
    var cv = canvas(640, 240), thongbao = el("p", { class: "tt-ghi" });
    var nut = el("button", { type: "button", class: "nut phu", text: "Cho máy viết tiếp 5 từ" }), cau = el("p", { class: "tt-cau" });
    o.appendChild(el("div", { class: "tt-hang" }, [ip])); o.appendChild(goi); o.appendChild(cv.c); o.appendChild(thongbao);
    o.appendChild(nut); o.appendChild(cau);
    var daThay = {};
    Object.keys(k.cap).forEach(function (a) { daThay[a] = 1; Object.keys(k.cap[a]).forEach(function (b) { daThay[b] = 1; }); });
    function tuCuoi() { var a = ip.value.trim().toLowerCase().split(/\s+/); return a[a.length - 1] || ""; }
    function phanBo(w) {
      var d = k.cap[w]; if (!d) return [];
      var tong = 0, a = Object.keys(d).map(function (x) { tong += d[x]; return [x, d[x]]; });
      a.sort(function (p, q) { return q[1] - p[1]; });
      return a.slice(0, k.top || 5).map(function (p) { return [p[0], 100 * p[1] / tong, p[1]]; });
    }
    function ve() {
      var w = tuCuoi(), pb = phanBo(w), g = cv.g;
      if (!pb.length) {
        truc(cv, 0, 1, 0, 1, "", "");
        thongbao.innerHTML = !w ? "" : daThay[w]
          ? "Trong " + k.so_cau + " câu đã học, “" + w + "” chỉ đứng <b>cuối câu</b> — máy chưa gặp từ nào đi sau nó, nên không đoán được."
          : "Máy <b>chưa từng thấy</b> từ “" + w + "” trong " + k.so_cau + " câu đã học — nên không đoán được. Đây là giới hạn của dữ liệu.";
        return;
      }
      var t = truc(cv, -0.5, pb.length - 0.5, 0, 100, "Từ tiếp theo", "Xác suất (%)", [0, 25, 50, 75, 100]);
      pb.forEach(function (p, j) {
        var bw = t.W / pb.length * 0.55; g.fillStyle = j ? "#93C5FD" : MAU.chinh;
        g.fillRect(t.x(j) - bw / 2, t.y(p[1]), bw, t.y(0) - t.y(p[1]));
        g.fillStyle = MAU.chu; g.textAlign = "center"; g.font = "600 13px " + FONT;
        g.fillText(p[0], t.x(j), t.T + t.H + 17); g.font = "12px " + FONT;
        g.fillText(so(p[1], 0) + "%", t.x(j), t.y(p[1]) - 6);
      });
      thongbao.innerHTML = "Sau “<b>" + w + "</b>”, máy đếm được " + pb.reduce(function (s, p) { return s + p[2]; }, 0) +
        " lần xuất hiện trong " + k.so_cau + " câu và chọn từ hay đi sau nhất.";
    }
    nut.addEventListener("click", function () {
      var a = ip.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      for (var i = 0; i < 5; i++) { var pb = phanBo(a[a.length - 1]); if (!pb.length) break; a.push(pb[0][0]); }
      cau.innerHTML = "Máy viết: <b>" + a.join(" ") + "</b>"; ip.value = a.join(" "); ve();
    });
    ip.addEventListener("input", ve); ve();
    return o;
  }

  // ---------------------------------------------------------------- phan_tan_3d (Plotly)
  var dangTaiPlotly = null;
  function taiPlotly() {
    if (window.Plotly) return Promise.resolve();
    if (!dangTaiPlotly) dangTaiPlotly = new Promise(function (ok, loi) {
      var s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/plotly.js-dist-min@2.35.2/plotly.min.js";
      s.onload = ok; s.onerror = loi; document.head.appendChild(s);
    });
    return dangTaiPlotly;
  }
  function phanTan3d(k) {
    var o = khung(k, "phan-tan-3d"), chon = [];
    var hang = el("div", { class: "tt-hang" });
    ["Trục X", "Trục Y", "Trục Z"].forEach(function (tn, i) {
      var s = el("select", { "aria-label": tn }, k.cot.map(function (c) { return el("option", { value: c, text: c }); }));
      s.value = k.mac_dinh[i]; s.addEventListener("change", ve); chon.push(s);
      hang.appendChild(el("label", {}, [tn + " ", s]));
    });
    var vung = el("div", { class: "tt-3d" }, [el("p", { class: "tt-ghi", text: "Đang tải hình 3D…" })]);
    o.appendChild(hang); o.appendChild(vung);
    if (k.ghi) o.appendChild(el("p", { class: "tt-ghi", html: k.ghi }));
    function ve() {
      taiPlotly().then(function () {
        var nhom = {}; k.du_lieu[k.nhan].forEach(function (n, i) { (nhom[n] = nhom[n] || []).push(i); });
        var ds = Object.keys(nhom).map(function (n, j) {
          var id = nhom[n], lay = function (c) { return id.map(function (i) { return k.du_lieu[c][i]; }); };
          return { type: "scatter3d", mode: "markers", name: n, x: lay(chon[0].value), y: lay(chon[1].value), z: lay(chon[2].value),
            marker: { size: 3.5, color: (k.mau || {})[n] || BANG_MAU[j % BANG_MAU.length], opacity: 0.85 } };
        });
        vung.innerHTML = "";
        window.Plotly.newPlot(vung, ds, { margin: { l: 0, r: 0, t: 0, b: 0 }, height: 420, font: { family: FONT, size: 12 },
          legend: { orientation: "h", y: 1.02 },
          scene: { xaxis: { title: chon[0].value }, yaxis: { title: chon[1].value }, zaxis: { title: chon[2].value } } },
          { displaylogo: false, responsive: true, modeBarButtonsToRemove: ["toImage"] });
      }).catch(function () { vung.innerHTML = '<p class="tt-ghi">Không tải được thư viện vẽ 3D — kiểm tra kết nối mạng.</p>'; });
    }
    ve();
    return o;
  }

  // ---------------------------------------------------------------- loc_bang (pandas)
  function locBang(k) {
    var o = khung(k, "loc-bang"), D = k.du_lieu, n = D[k.cot_so[0]].length;
    var sCot = el("select", { "aria-label": "cột để lọc" }, [el("option", { value: "", text: "(không lọc)" })].concat(
      k.cot_loc.map(function (c) { return el("option", { value: c.ten, text: c.ten }); })));
    var sGt = el("select", { "aria-label": "giá trị lọc" });
    var sSo = el("select", { "aria-label": "cột số" }, k.cot_so.map(function (c) { return el("option", { value: c, text: c }); }));
    var PHEP = [["mean", "trung bình"], ["max", "lớn nhất"], ["min", "nhỏ nhất"], ["count", "đếm số dòng"]];
    var sPhep = el("select", { "aria-label": "phép tính" }, PHEP.map(function (p) { return el("option", { value: p[0], text: p[1] }); }));
    var ma = el("pre", { class: "tt-ma" }), kq = el("div", { class: "tt-so-lon" });
    o.appendChild(el("div", { class: "tt-hang" }, [el("label", {}, ["Lọc theo ", sCot]), el("label", {}, ["bằng ", sGt])]));
    o.appendChild(el("div", { class: "tt-hang" }, [el("label", {}, ["Cột ", sSo]), el("label", {}, ["Phép tính ", sPhep])]));
    o.appendChild(ma); o.appendChild(kq);
    function doiGt() {
      var c = k.cot_loc.filter(function (x) { return x.ten === sCot.value; })[0];
      sGt.innerHTML = ""; sGt.disabled = !c;
      (c ? c.gia_tri : []).forEach(function (g) { sGt.appendChild(el("option", { value: g, text: g })); });
      tinh();
    }
    function tinh() {
      var id = []; for (var i = 0; i < n; i++) if (!sCot.value || String(D[sCot.value][i]) === sGt.value) id.push(i);
      var x = id.map(function (i) { return D[sSo.value][i]; }), p = sPhep.value, r;
      if (p === "count") r = x.length;
      else if (!x.length) r = NaN;
      else if (p === "mean") r = x.reduce(function (a, b) { return a + b; }, 0) / x.length;
      else r = Math[p].apply(null, x);
      var loc = sCot.value ? k.ten_df + '[' + k.ten_df + '["' + sCot.value + '"] == "' + sGt.value + '"]' : k.ten_df;
      ma.textContent = (p === "count" ? "len(" + loc + ")" : loc + '["' + sSo.value + '"].' + p + "()");
      kq.innerHTML = "<span>Kết quả</span><b>" + (isNaN(r) ? "—" : so(r, p === "count" ? 0 : 2)) + "</b>" +
        '<small>' + id.length + " / " + n + " dòng thoả điều kiện</small>";
    }
    [sGt, sSo, sPhep].forEach(function (s) { s.addEventListener("change", tinh); });
    sCot.addEventListener("change", doiGt); doiGt();
    return o;
  }

  // ---------------------------------------------------------------- histogram
  function histogram(k) {
    var o = khung(k, "histogram"), a = k.gia_tri, lo = Math.min.apply(null, a), hi = Math.max.apply(null, a);
    var r = el("input", { type: "range", min: k.bins_min || 3, max: k.bins_max || 30, step: 1, value: k.mac_dinh || 10, "aria-label": "số cột" });
    var ma = el("pre", { class: "tt-ma" }), cv = canvas(640, 260);
    o.appendChild(r); o.appendChild(ma); o.appendChild(cv.c);
    if (k.ghi) o.appendChild(el("p", { class: "tt-ghi", html: k.ghi }));
    function ve() {
      var b = +r.value, w = (hi - lo) / b, dem = new Array(b).fill(0);
      a.forEach(function (x) { dem[Math.min(b - 1, Math.floor((x - lo) / w))]++; });
      var buoc = Math.max(1, Math.ceil(Math.max.apply(null, dem) / 4)), top = buoc * 5, vach = [];
      for (var v = 0; v <= top; v += buoc) vach.push(v);            // so ban la so nguyen
      var t = truc(cv, lo, hi, 0, top, k.nhan_x, "Số bạn", vach), g = cv.g;
      dem.forEach(function (d, i) {
        g.fillStyle = MAU.chinh; g.fillRect(t.x(lo + i * w) + 1, t.y(d), t.x(lo + w) - t.x(lo) - 2, t.y(0) - t.y(d));
      });
      g.fillStyle = MAU.phu; g.textAlign = "center";
      vachDeu(lo, hi, 5).forEach(function (x) { g.fillText(so(x, 1), t.x(x), t.T + t.H + 16); });
      ma.textContent = 'plt.hist(' + k.ma_cot + ', bins=' + b + ')';
    }
    r.addEventListener("input", ve); ve();
    return o;
  }

  // ---------------------------------------------------------------- chay_tung_dong (Python)
  function chayTungDong(k) {
    var o = khung(k, "chay-tung-dong"), i = 0;
    var ma = el("div", { class: "tt-code" }), bien = el("table", { class: "bang tt-bien" }), man = el("pre", { class: "tt-man-hinh" });
    var truoc = el("button", { type: "button", class: "nut phu", text: "◀ Lùi" }), sau = el("button", { type: "button", class: "nut", text: "Chạy dòng tiếp ▶" });
    var dem = el("span", { class: "tt-ghi" });
    var dong = k.code.map(function (c, j) { return el("div", { class: "tt-dong" }, [el("span", { class: "tt-so", text: String(j + 1) }), el("code", { text: c })]); });
    dong.forEach(function (d) { ma.appendChild(d); });
    o.appendChild(el("div", { class: "tt-hai-cot" }, [ma, el("div", {}, [el("div", { class: "tt-nhan-phu", text: "Biến đang có" }), bien,
      el("div", { class: "tt-nhan-phu", text: "Màn hình" }), man])]));
    o.appendChild(el("div", { class: "tt-hang" }, [truoc, sau, dem]));
    function ve() {
      var b = k.buoc[i];
      dong.forEach(function (d, j) { d.classList.toggle("dang-chay", b && j === b.dong); });
      bien.innerHTML = "<tr><th>Tên</th><th>Giá trị</th><th>Kiểu</th></tr>" + Object.keys(b ? b.bien : {}).map(function (t) {
        return "<tr><td><code>" + t + "</code></td><td>" + b.bien[t][0] + "</td><td>" + b.bien[t][1] + "</td></tr>"; }).join("");
      man.textContent = b ? b.in : "";
      dem.textContent = "Bước " + i + " / " + (k.buoc.length - 1);
      truoc.disabled = i === 0; sau.disabled = i === k.buoc.length - 1;
    }
    truoc.addEventListener("click", function () { if (i > 0) { i--; ve(); } });
    sau.addEventListener("click", function () { if (i < k.buoc.length - 1) { i++; ve(); } });
    ve();
    return o;
  }

  window.ML1_TT = {
    init: function (hamEl) { el = hamEl; },
    tra_bang: traBang, du_doan_tu: duDoanTu, phan_tan_3d: phanTan3d, loc_bang: locBang,
    histogram: histogram, chay_tung_dong: chayTungDong
  };
})();
