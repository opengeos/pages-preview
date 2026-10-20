const { min: An, max: En } = Math, nt = (t, e = 0, n = 1) => An(En(e, t), n), ne = (t) => {
  t._clipped = !1, t._unclipped = t.slice(0);
  for (let e = 0; e <= 3; e++) e < 3 ? ((t[e] < 0 || t[e] > 255) && (t._clipped = !0), t[e] = nt(t[e], 0, 255)) : e === 3 && (t[e] = nt(t[e], 0, 1));
  return t;
}, Pe = {};
for (let t of ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]) Pe[`[object ${t}]`] = t.toLowerCase();
function A(t) {
  return Pe[Object.prototype.toString.call(t)] || "object";
}
const N = (t, e = null) => t.length >= 3 ? Array.prototype.slice.call(t) : A(t[0]) == "object" && e ? e.split("").filter((n) => t[0][n] !== void 0).map((n) => t[0][n]) : t[0].slice(0), ft = (t) => {
  if (t.length < 2) return null;
  const e = t.length - 1;
  return A(t[e]) == "string" ? t[e].toLowerCase() : null;
}, { PI: jt, min: Oe, max: Te } = Math, Z = (t) => Math.round(t * 100) / 100, Ht = (t) => Math.round(t * 100) / 100, F = jt * 2, Ot = jt / 3, _n = jt / 180, Sn = 180 / jt;
function Re(t) {
  return [...t.slice(0, 3).reverse(), ...t.slice(3)];
}
const x = { format: {}, autodetect: [] };
class h {
  constructor(...e) {
    const n = this;
    if (A(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor) return e[0];
    let r = ft(e), o = !1;
    if (!r) {
      o = !0, x.sorted || (x.autodetect = x.autodetect.sort((s, a) => a.p - s.p), x.sorted = !0);
      for (let s of x.autodetect) if (r = s.test(...e), r) break;
    }
    if (x.format[r]) {
      const s = x.format[r].apply(null, o ? e : e.slice(0, -1));
      n._rgb = ne(s);
    } else throw new Error("unknown format: " + e);
    n._rgb.length === 3 && n._rgb.push(1);
  }
  toString() {
    return A(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`;
  }
}
const jn = "3.2.0", E = (...t) => new h(...t);
E.version = jn;
const ct = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", laserlemon: "#ffff54", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrod: "#fafad2", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", maroon2: "#7f0000", maroon3: "#b03060", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", purple2: "#7f007f", purple3: "#a020f0", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" }, $n = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, Pn = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, Ue = (t) => {
  if (t.match($n)) {
    (t.length === 4 || t.length === 7) && (t = t.substr(1)), t.length === 3 && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
    const e = parseInt(t, 16), n = e >> 16, r = e >> 8 & 255, o = e & 255;
    return [n, r, o, 1];
  }
  if (t.match(Pn)) {
    (t.length === 5 || t.length === 9) && (t = t.substr(1)), t.length === 4 && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
    const e = parseInt(t, 16), n = e >> 24 & 255, r = e >> 16 & 255, o = e >> 8 & 255, s = Math.round((e & 255) / 255 * 100) / 100;
    return [n, r, o, s];
  }
  throw new Error(`unknown hex color: ${t}`);
}, { round: kt } = Math, Ie = (...t) => {
  let [e, n, r, o] = N(t, "rgba"), s = ft(t) || "auto";
  o === void 0 && (o = 1), s === "auto" && (s = o < 1 ? "rgba" : "rgb"), e = kt(e), n = kt(n), r = kt(r);
  let a = "000000" + (e << 16 | n << 8 | r).toString(16);
  a = a.substr(a.length - 6);
  let c = "0" + kt(o * 255).toString(16);
  switch (c = c.substr(c.length - 2), s.toLowerCase()) {
    case "rgba":
      return `#${a}${c}`;
    case "argb":
      return `#${c}${a}`;
    default:
      return `#${a}`;
  }
};
h.prototype.name = function() {
  const t = Ie(this._rgb, "rgb");
  for (let e of Object.keys(ct)) if (ct[e] === t) return e.toLowerCase();
  return t;
}, x.format.named = (t) => {
  if (t = t.toLowerCase(), ct[t]) return Ue(ct[t]);
  throw new Error("unknown color name: " + t);
}, x.autodetect.push({ p: 5, test: (t, ...e) => {
  if (!e.length && A(t) === "string" && ct[t.toLowerCase()]) return "named";
} }), h.prototype.alpha = function(t, e = !1) {
  return t !== void 0 && A(t) === "number" ? e ? (this._rgb[3] = t, this) : new h([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb") : this._rgb[3];
}, h.prototype.clipped = function() {
  return this._rgb._clipped || !1;
};
const H = { Kn: 18, labWhitePoint: "d65", Xn: 0.95047, Yn: 1, Zn: 1.08883, kE: 216 / 24389, kKE: 8, kK: 24389 / 27, RefWhiteRGB: { X: 0.95047, Y: 1, Z: 1.08883 }, MtxRGB2XYZ: { m00: 0.4124564390896922, m01: 0.21267285140562253, m02: 0.0193338955823293, m10: 0.357576077643909, m11: 0.715152155287818, m12: 0.11919202588130297, m20: 0.18043748326639894, m21: 0.07217499330655958, m22: 0.9503040785363679 }, MtxXYZ2RGB: { m00: 3.2404541621141045, m01: -0.9692660305051868, m02: 0.055643430959114726, m10: -1.5371385127977166, m11: 1.8760108454466942, m12: -0.2040259135167538, m20: -0.498531409556016, m21: 0.041556017530349834, m22: 1.0572251882231791 }, As: 0.9414285350000001, Bs: 1.040417467, Cs: 1.089532651, MtxAdaptMa: { m00: 0.8951, m01: -0.7502, m02: 0.0389, m10: 0.2664, m11: 1.7135, m12: -0.0685, m20: -0.1614, m21: 0.0367, m22: 1.0296 }, MtxAdaptMaI: { m00: 0.9869929054667123, m01: 0.43230526972339456, m02: -0.008528664575177328, m10: -0.14705425642099013, m11: 0.5183602715367776, m12: 0.04004282165408487, m20: 0.15996265166373125, m21: 0.0492912282128556, m22: 0.9684866957875502 } }, On = /* @__PURE__ */ new Map([["a", [1.0985, 0.35585]], ["b", [1.0985, 0.35585]], ["c", [0.98074, 1.18232]], ["d50", [0.96422, 0.82521]], ["d55", [0.95682, 0.92149]], ["d65", [0.95047, 1.08883]], ["e", [1, 1, 1]], ["f2", [0.99186, 0.67393]], ["f7", [0.95041, 1.08747]], ["f11", [1.00962, 0.6435]], ["icc", [0.96422, 0.82521]]]);
function K(t) {
  const e = On.get(String(t).toLowerCase());
  if (!e) throw new Error("unknown Lab illuminant " + t);
  H.labWhitePoint = t, H.Xn = e[0], H.Zn = e[1];
}
function gt() {
  return H.labWhitePoint;
}
const re = (...t) => {
  t = N(t, "lab");
  const [e, n, r] = t, [o, s, a] = Tn(e, n, r), [c, l, i] = Be(o, s, a);
  return [c, l, i, t.length > 3 ? t[3] : 1];
}, Tn = (t, e, n) => {
  const { kE: r, kK: o, kKE: s, Xn: a, Yn: c, Zn: l } = H, i = (t + 16) / 116, u = 2e-3 * e + i, p = i - 5e-3 * n, b = u * u * u, g = p * p * p, k = b > r ? b : (116 * u - 16) / o, S = t > s ? Math.pow((t + 16) / 116, 3) : t / o, y = g > r ? g : (116 * p - 16) / o, m = k * a, O = S * c, P = y * l;
  return [m, O, P];
}, Tt = (t) => {
  const e = Math.sign(t);
  return t = Math.abs(t), (t <= 31308e-7 ? t * 12.92 : 1.055 * Math.pow(t, 1 / 2.4) - 0.055) * e;
}, Be = (t, e, n) => {
  const { MtxAdaptMa: r, MtxAdaptMaI: o, MtxXYZ2RGB: s, RefWhiteRGB: a, Xn: c, Yn: l, Zn: i } = H, u = c * r.m00 + l * r.m10 + i * r.m20, p = c * r.m01 + l * r.m11 + i * r.m21, b = c * r.m02 + l * r.m12 + i * r.m22, g = a.X * r.m00 + a.Y * r.m10 + a.Z * r.m20, k = a.X * r.m01 + a.Y * r.m11 + a.Z * r.m21, S = a.X * r.m02 + a.Y * r.m12 + a.Z * r.m22, y = (t * r.m00 + e * r.m10 + n * r.m20) * (g / u), m = (t * r.m01 + e * r.m11 + n * r.m21) * (k / p), O = (t * r.m02 + e * r.m12 + n * r.m22) * (S / b), P = y * o.m00 + m * o.m10 + O * o.m20, T = y * o.m01 + m * o.m11 + O * o.m21, R = y * o.m02 + m * o.m12 + O * o.m22, Y = Tt(P * s.m00 + T * s.m10 + R * s.m20), _ = Tt(P * s.m01 + T * s.m11 + R * s.m21), d = Tt(P * s.m02 + T * s.m12 + R * s.m22);
  return [Y * 255, _ * 255, d * 255];
}, oe = (...t) => {
  const [e, n, r, ...o] = N(t, "rgb"), [s, a, c] = Ye(e, n, r), [l, i, u] = Rn(s, a, c);
  return [l, i, u, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function Rn(t, e, n) {
  const { Xn: r, Yn: o, Zn: s, kE: a, kK: c } = H, l = t / r, i = e / o, u = n / s, p = l > a ? Math.pow(l, 1 / 3) : (c * l + 16) / 116, b = i > a ? Math.pow(i, 1 / 3) : (c * i + 16) / 116, g = u > a ? Math.pow(u, 1 / 3) : (c * u + 16) / 116;
  return [116 * b - 16, 500 * (p - b), 200 * (b - g)];
}
function Rt(t) {
  const e = Math.sign(t);
  return t = Math.abs(t), (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) * e;
}
const Ye = (t, e, n) => {
  t = Rt(t / 255), e = Rt(e / 255), n = Rt(n / 255);
  const { MtxRGB2XYZ: r, MtxAdaptMa: o, MtxAdaptMaI: s, Xn: a, Yn: c, Zn: l, As: i, Bs: u, Cs: p } = H;
  let b = t * r.m00 + e * r.m10 + n * r.m20, g = t * r.m01 + e * r.m11 + n * r.m21, k = t * r.m02 + e * r.m12 + n * r.m22;
  const S = a * o.m00 + c * o.m10 + l * o.m20, y = a * o.m01 + c * o.m11 + l * o.m21, m = a * o.m02 + c * o.m12 + l * o.m22;
  let O = b * o.m00 + g * o.m10 + k * o.m20, P = b * o.m01 + g * o.m11 + k * o.m21, T = b * o.m02 + g * o.m12 + k * o.m22;
  return O *= S / i, P *= y / u, T *= m / p, b = O * s.m00 + P * s.m10 + T * s.m20, g = O * s.m01 + P * s.m11 + T * s.m21, k = O * s.m02 + P * s.m12 + T * s.m22, [b, g, k];
};
h.prototype.lab = function() {
  return oe(this._rgb);
};
const Un = (...t) => new h(...t, "lab");
Object.assign(E, { lab: Un, getLabWhitePoint: gt, setLabWhitePoint: K }), x.format.lab = re, x.autodetect.push({ p: 2, test: (...t) => {
  if (t = N(t, "lab"), A(t) === "array" && t.length === 3) return "lab";
} }), h.prototype.darken = function(t = 1) {
  const e = this, n = e.lab();
  return n[0] -= H.Kn * t, new h(n, "lab").alpha(e.alpha(), !0);
}, h.prototype.brighten = function(t = 1) {
  return this.darken(-t);
}, h.prototype.darker = h.prototype.darken, h.prototype.brighter = h.prototype.brighten, h.prototype.get = function(t) {
  const [e, n] = t.split("."), r = this[e]();
  if (n) {
    const o = e.indexOf(n) - (e.substr(0, 2) === "ok" ? 2 : 0);
    if (o > -1) return r[o];
    throw new Error(`unknown channel ${n} in mode ${e}`);
  } else return r;
};
const { pow: In } = Math, Bn = 1e-7, Yn = 20;
h.prototype.luminance = function(t, e = "rgb") {
  if (t !== void 0 && A(t) === "number") {
    if (t === 0) return new h([0, 0, 0, this._rgb[3]], "rgb");
    if (t === 1) return new h([255, 255, 255, this._rgb[3]], "rgb");
    let n = this.luminance(), r = Yn;
    const o = (a, c) => {
      const l = a.interpolate(c, 0.5, e), i = l.luminance();
      return Math.abs(t - i) < Bn || !r-- ? l : i > t ? o(a, l) : o(l, c);
    }, s = (n > t ? o(new h([0, 0, 0]), this) : o(this, new h([255, 255, 255]))).rgb();
    return new h([...s, this._rgb[3]]);
  }
  return Dn(...this._rgb.slice(0, 3));
};
const Dn = (t, e, n) => (t = Ut(t), e = Ut(e), n = Ut(n), 0.2126 * t + 0.7152 * e + 0.0722 * n), Ut = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : In((t + 0.055) / 1.055, 2.4)), B = {}, it = (t, e, n = 0.5, ...r) => {
  let o = r[0] || "lrgb";
  if (!B[o] && !r.length && (o = Object.keys(B)[0]), !B[o]) throw new Error(`interpolation mode ${o} is not defined`);
  return A(t) !== "object" && (t = new h(t)), A(e) !== "object" && (e = new h(e)), B[o](t, e, n).alpha(t.alpha() + n * (e.alpha() - t.alpha()));
};
h.prototype.mix = h.prototype.interpolate = function(t, e = 0.5, ...n) {
  return it(this, t, e, ...n);
}, h.prototype.premultiply = function(t = !1) {
  const e = this._rgb, n = e[3];
  return t ? (this._rgb = [e[0] * n, e[1] * n, e[2] * n, n], this) : new h([e[0] * n, e[1] * n, e[2] * n, n], "rgb");
};
const { sin: Gn, cos: zn } = Math, De = (...t) => {
  let [e, n, r] = N(t, "lch");
  return isNaN(r) && (r = 0), r = r * _n, [e, zn(r) * n, Gn(r) * n];
}, ae = (...t) => {
  t = N(t, "lch");
  const [e, n, r] = t, [o, s, a] = De(e, n, r), [c, l, i] = re(o, s, a);
  return [c, l, i, t.length > 3 ? t[3] : 1];
}, Zn = (...t) => {
  const e = Re(N(t, "hcl"));
  return ae(...e);
}, { sqrt: qn, atan2: Wn, round: Xn } = Math, Ge = (...t) => {
  const [e, n, r] = N(t, "lab"), o = qn(n * n + r * r);
  let s = (Wn(r, n) * Sn + 360) % 360;
  return Xn(o * 1e4) === 0 && (s = Number.NaN), [e, o, s];
}, Vt = (...t) => {
  const [e, n, r, ...o] = N(t, "rgb"), [s, a, c] = oe(e, n, r), [l, i, u] = Ge(s, a, c);
  return [l, i, u, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
h.prototype.lch = function() {
  return Vt(this._rgb);
}, h.prototype.hcl = function() {
  return Re(Vt(this._rgb));
};
const Hn = (...t) => new h(...t, "lch"), Vn = (...t) => new h(...t, "hcl");
Object.assign(E, { lch: Hn, hcl: Vn }), x.format.lch = ae, x.format.hcl = Zn, ["lch", "hcl"].forEach((t) => x.autodetect.push({ p: 2, test: (...e) => {
  if (e = N(e, t), A(e) === "array" && e.length === 3) return t;
} })), h.prototype.saturate = function(t = 1) {
  const e = this, n = e.lch();
  return n[1] += H.Kn * t, n[1] < 0 && (n[1] = 0), new h(n, "lch").alpha(e.alpha(), !0);
}, h.prototype.desaturate = function(t = 1) {
  return this.saturate(-t);
}, h.prototype.set = function(t, e, n = !1) {
  const [r, o] = t.split("."), s = this[r]();
  if (o) {
    const a = r.indexOf(o) - (r.substr(0, 2) === "ok" ? 2 : 0);
    if (a > -1) {
      if (A(e) == "string") switch (e.charAt(0)) {
        case "+":
          s[a] += +e;
          break;
        case "-":
          s[a] += +e;
          break;
        case "*":
          s[a] *= +e.substr(1);
          break;
        case "/":
          s[a] /= +e.substr(1);
          break;
        default:
          s[a] = +e;
      }
      else if (A(e) === "number") s[a] = e;
      else throw new Error("unsupported value for Color.set");
      const c = new h(s, r);
      return n ? (this._rgb = c._rgb, this) : c;
    }
    throw new Error(`unknown channel ${o} in mode ${r}`);
  } else return s;
}, h.prototype.tint = function(t = 0.5, ...e) {
  return it(this, "white", t, ...e);
}, h.prototype.shade = function(t = 0.5, ...e) {
  return it(this, "black", t, ...e);
};
const Fn = (t, e, n) => {
  const r = t._rgb, o = e._rgb;
  return new h(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "rgb");
};
B.rgb = Fn;
const { sqrt: It, pow: ot } = Math, Kn = (t, e, n) => {
  const [r, o, s] = t._rgb, [a, c, l] = e._rgb;
  return new h(It(ot(r, 2) * (1 - n) + ot(a, 2) * n), It(ot(o, 2) * (1 - n) + ot(c, 2) * n), It(ot(s, 2) * (1 - n) + ot(l, 2) * n), "rgb");
};
B.lrgb = Kn;
const Qn = (t, e, n) => {
  const r = t.lab(), o = e.lab();
  return new h(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "lab");
};
B.lab = Qn;
const ut = (t, e, n, r) => {
  let o, s;
  r === "hsl" ? (o = t.hsl(), s = e.hsl()) : r === "hsv" ? (o = t.hsv(), s = e.hsv()) : r === "hcg" ? (o = t.hcg(), s = e.hcg()) : r === "hsi" ? (o = t.hsi(), s = e.hsi()) : r === "lch" || r === "hcl" ? (r = "hcl", o = t.hcl(), s = e.hcl()) : r === "oklch" && (o = t.oklch().reverse(), s = e.oklch().reverse());
  let a, c, l, i, u, p;
  (r.substr(0, 1) === "h" || r === "oklch") && ([a, l, u] = o, [c, i, p] = s);
  let b, g, k, S;
  return !isNaN(a) && !isNaN(c) ? (c > a && c - a > 180 ? S = c - (a + 360) : c < a && a - c > 180 ? S = c + 360 - a : S = c - a, g = a + n * S) : isNaN(a) ? isNaN(c) ? g = Number.NaN : (g = c, (u == 1 || u == 0) && r != "hsv" && (b = i)) : (g = a, (p == 1 || p == 0) && r != "hsv" && (b = l)), b === void 0 && (b = l + n * (i - l)), k = u + n * (p - u), r === "oklch" ? new h([k, b, g], r) : new h([g, b, k], r);
}, fe = (t, e, n) => ut(t, e, n, "lch");
B.lch = fe, B.hcl = fe;
const Jn = (t) => {
  if (A(t) == "number" && t >= 0 && t <= 16777215) {
    const e = t >> 16, n = t >> 8 & 255, r = t & 255;
    return [e, n, r, 1];
  }
  throw new Error("unknown num color: " + t);
}, tr = (...t) => {
  const [e, n, r] = N(t, "rgb");
  return (e << 16) + (n << 8) + r;
};
h.prototype.num = function() {
  return tr(this._rgb);
};
const er = (...t) => new h(...t, "num");
Object.assign(E, { num: er }), x.format.num = Jn, x.autodetect.push({ p: 5, test: (...t) => {
  if (t.length === 1 && A(t[0]) === "number" && t[0] >= 0 && t[0] <= 16777215) return "num";
} });
const nr = (t, e, n) => {
  const r = t.num(), o = e.num();
  return new h(r + n * (o - r), "num");
};
B.num = nr;
const { floor: rr } = Math, or = (...t) => {
  t = N(t, "hcg");
  let [e, n, r] = t, o, s, a;
  r = r * 255;
  const c = n * 255;
  if (n === 0) o = s = a = r;
  else {
    e === 360 && (e = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 60;
    const l = rr(e), i = e - l, u = r * (1 - n), p = u + c * (1 - i), b = u + c * i, g = u + c;
    switch (l) {
      case 0:
        [o, s, a] = [g, b, u];
        break;
      case 1:
        [o, s, a] = [p, g, u];
        break;
      case 2:
        [o, s, a] = [u, g, b];
        break;
      case 3:
        [o, s, a] = [u, p, g];
        break;
      case 4:
        [o, s, a] = [b, u, g];
        break;
      case 5:
        [o, s, a] = [g, u, p];
        break;
    }
  }
  return [o, s, a, t.length > 3 ? t[3] : 1];
}, ar = (...t) => {
  const [e, n, r] = N(t, "rgb"), o = Oe(e, n, r), s = Te(e, n, r), a = s - o, c = a * 100 / 255, l = o / (255 - a) * 100;
  let i;
  return a === 0 ? i = Number.NaN : (e === s && (i = (n - r) / a), n === s && (i = 2 + (r - e) / a), r === s && (i = 4 + (e - n) / a), i *= 60, i < 0 && (i += 360)), [i, c, l];
};
h.prototype.hcg = function() {
  return ar(this._rgb);
};
const sr = (...t) => new h(...t, "hcg");
E.hcg = sr, x.format.hcg = or, x.autodetect.push({ p: 1, test: (...t) => {
  if (t = N(t, "hcg"), A(t) === "array" && t.length === 3) return "hcg";
} });
const cr = (t, e, n) => ut(t, e, n, "hcg");
B.hcg = cr;
const { cos: at } = Math, lr = (...t) => {
  t = N(t, "hsi");
  let [e, n, r] = t, o, s, a;
  return isNaN(e) && (e = 0), isNaN(n) && (n = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 360, e < 1 / 3 ? (a = (1 - n) / 3, o = (1 + n * at(F * e) / at(Ot - F * e)) / 3, s = 1 - (a + o)) : e < 2 / 3 ? (e -= 1 / 3, o = (1 - n) / 3, s = (1 + n * at(F * e) / at(Ot - F * e)) / 3, a = 1 - (o + s)) : (e -= 2 / 3, s = (1 - n) / 3, a = (1 + n * at(F * e) / at(Ot - F * e)) / 3, o = 1 - (s + a)), o = nt(r * o * 3), s = nt(r * s * 3), a = nt(r * a * 3), [o * 255, s * 255, a * 255, t.length > 3 ? t[3] : 1];
}, { min: ir, sqrt: fr, acos: ur } = Math, dr = (...t) => {
  let [e, n, r] = N(t, "rgb");
  e /= 255, n /= 255, r /= 255;
  let o;
  const s = ir(e, n, r), a = (e + n + r) / 3, c = a > 0 ? 1 - s / a : 0;
  return c === 0 ? o = NaN : (o = (e - n + (e - r)) / 2, o /= fr((e - n) * (e - n) + (e - r) * (n - r)), o = ur(o), r > n && (o = F - o), o /= F), [o * 360, c, a];
};
h.prototype.hsi = function() {
  return dr(this._rgb);
};
const hr = (...t) => new h(...t, "hsi");
E.hsi = hr, x.format.hsi = lr, x.autodetect.push({ p: 2, test: (...t) => {
  if (t = N(t, "hsi"), A(t) === "array" && t.length === 3) return "hsi";
} });
const pr = (t, e, n) => ut(t, e, n, "hsi");
B.hsi = pr;
const Ft = (...t) => {
  t = N(t, "hsl");
  const [e, n, r] = t;
  let o, s, a;
  if (n === 0) o = s = a = r * 255;
  else {
    const c = [0, 0, 0], l = [0, 0, 0], i = r < 0.5 ? r * (1 + n) : r + n - r * n, u = 2 * r - i, p = e / 360;
    c[0] = p + 1 / 3, c[1] = p, c[2] = p - 1 / 3;
    for (let b = 0; b < 3; b++) c[b] < 0 && (c[b] += 1), c[b] > 1 && (c[b] -= 1), 6 * c[b] < 1 ? l[b] = u + (i - u) * 6 * c[b] : 2 * c[b] < 1 ? l[b] = i : 3 * c[b] < 2 ? l[b] = u + (i - u) * (2 / 3 - c[b]) * 6 : l[b] = u;
    [o, s, a] = [l[0] * 255, l[1] * 255, l[2] * 255];
  }
  return t.length > 3 ? [o, s, a, t[3]] : [o, s, a, 1];
}, ze = (...t) => {
  t = N(t, "rgba");
  let [e, n, r] = t;
  e /= 255, n /= 255, r /= 255;
  const o = Oe(e, n, r), s = Te(e, n, r), a = (s + o) / 2;
  let c, l;
  return s === o ? (c = 0, l = Number.NaN) : c = a < 0.5 ? (s - o) / (s + o) : (s - o) / (2 - s - o), e == s ? l = (n - r) / (s - o) : n == s ? l = 2 + (r - e) / (s - o) : r == s && (l = 4 + (e - n) / (s - o)), l *= 60, l < 0 && (l += 360), t.length > 3 && t[3] !== void 0 ? [l, c, a, t[3]] : [l, c, a];
};
h.prototype.hsl = function() {
  return ze(this._rgb);
};
const br = (...t) => new h(...t, "hsl");
E.hsl = br, x.format.hsl = Ft, x.autodetect.push({ p: 2, test: (...t) => {
  if (t = N(t, "hsl"), A(t) === "array" && t.length === 3) return "hsl";
} });
const mr = (t, e, n) => ut(t, e, n, "hsl");
B.hsl = mr;
const { floor: gr } = Math, yr = (...t) => {
  t = N(t, "hsv");
  let [e, n, r] = t, o, s, a;
  if (r *= 255, n === 0) o = s = a = r;
  else {
    e === 360 && (e = 0), e > 360 && (e -= 360), e < 0 && (e += 360), e /= 60;
    const c = gr(e), l = e - c, i = r * (1 - n), u = r * (1 - n * l), p = r * (1 - n * (1 - l));
    switch (c) {
      case 0:
        [o, s, a] = [r, p, i];
        break;
      case 1:
        [o, s, a] = [u, r, i];
        break;
      case 2:
        [o, s, a] = [i, r, p];
        break;
      case 3:
        [o, s, a] = [i, u, r];
        break;
      case 4:
        [o, s, a] = [p, i, r];
        break;
      case 5:
        [o, s, a] = [r, i, u];
        break;
    }
  }
  return [o, s, a, t.length > 3 ? t[3] : 1];
}, { min: wr, max: vr } = Math, kr = (...t) => {
  t = N(t, "rgb");
  let [e, n, r] = t;
  const o = wr(e, n, r), s = vr(e, n, r), a = s - o;
  let c, l, i;
  return i = s / 255, s === 0 ? (c = Number.NaN, l = 0) : (l = a / s, e === s && (c = (n - r) / a), n === s && (c = 2 + (r - e) / a), r === s && (c = 4 + (e - n) / a), c *= 60, c < 0 && (c += 360)), [c, l, i];
};
h.prototype.hsv = function() {
  return kr(this._rgb);
};
const Cr = (...t) => new h(...t, "hsv");
E.hsv = Cr, x.format.hsv = yr, x.autodetect.push({ p: 2, test: (...t) => {
  if (t = N(t, "hsv"), A(t) === "array" && t.length === 3) return "hsv";
} });
const Mr = (t, e, n) => ut(t, e, n, "hsv");
B.hsv = Mr;
function Nt(t, e) {
  let n = t.length;
  Array.isArray(t[0]) || (t = [t]), Array.isArray(e[0]) || (e = e.map((a) => [a]));
  let r = e[0].length, o = e[0].map((a, c) => e.map((l) => l[c])), s = t.map((a) => o.map((c) => Array.isArray(a) ? a.reduce((l, i, u) => l + i * (c[u] || 0), 0) : c.reduce((l, i) => l + i * a, 0)));
  return n === 1 && (s = s[0]), r === 1 ? s.map((a) => a[0]) : s;
}
const se = (...t) => {
  t = N(t, "lab");
  const [e, n, r, ...o] = t, [s, a, c] = xr([e, n, r]), [l, i, u] = Be(s, a, c);
  return [l, i, u, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function xr(t) {
  var e = [[1.2268798758459243, -0.5578149944602171, 0.2813910456659647], [-0.0405757452148008, 1.112286803280317, -0.0717110580655164], [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]], n = [[1, 0.3963377773761749, 0.2158037573099136], [1, -0.1055613458156586, -0.0638541728258133], [1, -0.0894841775298119, -1.2914855480194092]], r = Nt(n, t);
  return Nt(e, r.map((o) => o ** 3));
}
const ce = (...t) => {
  const [e, n, r, ...o] = N(t, "rgb"), s = Ye(e, n, r);
  return [...Nr(s), ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
};
function Nr(t) {
  const e = [[0.819022437996703, 0.3619062600528904, -0.1288737815209879], [0.0329836539323885, 0.9292868615863434, 0.0361446663506424], [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]], n = [[0.210454268309314, 0.7936177747023054, -0.0040720430116193], [1.9779985324311684, -2.42859224204858, 0.450593709617411], [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]], r = Nt(e, t);
  return Nt(n, r.map((o) => Math.cbrt(o)));
}
h.prototype.oklab = function() {
  return ce(this._rgb);
};
const Lr = (...t) => new h(...t, "oklab");
Object.assign(E, { oklab: Lr }), x.format.oklab = se, x.autodetect.push({ p: 2, test: (...t) => {
  if (t = N(t, "oklab"), A(t) === "array" && t.length === 3) return "oklab";
} });
const Ar = (t, e, n) => {
  const r = t.oklab(), o = e.oklab();
  return new h(r[0] + n * (o[0] - r[0]), r[1] + n * (o[1] - r[1]), r[2] + n * (o[2] - r[2]), "oklab");
};
B.oklab = Ar;
const Er = (t, e, n) => ut(t, e, n, "oklch");
B.oklch = Er;
const { pow: Bt, sqrt: Yt, PI: Dt, cos: ue, sin: de, atan2: _r } = Math, Sr = (t, e = "lrgb", n = null) => {
  const r = t.length;
  n || (n = Array.from(new Array(r)).map(() => 1));
  const o = r / n.reduce(function(p, b) {
    return p + b;
  });
  if (n.forEach((p, b) => {
    n[b] *= o;
  }), t = t.map((p) => new h(p)), e === "lrgb") return jr(t, n);
  const s = t.shift(), a = s.get(e), c = [];
  let l = 0, i = 0;
  for (let p = 0; p < a.length; p++) if (a[p] = (a[p] || 0) * n[0], c.push(isNaN(a[p]) ? 0 : n[0]), e.charAt(p) === "h" && !isNaN(a[p])) {
    const b = a[p] / 180 * Dt;
    l += ue(b) * n[0], i += de(b) * n[0];
  }
  let u = s.alpha() * n[0];
  t.forEach((p, b) => {
    const g = p.get(e);
    u += p.alpha() * n[b + 1];
    for (let k = 0; k < a.length; k++) if (!isNaN(g[k])) if (c[k] += n[b + 1], e.charAt(k) === "h") {
      const S = g[k] / 180 * Dt;
      l += ue(S) * n[b + 1], i += de(S) * n[b + 1];
    } else a[k] += g[k] * n[b + 1];
  });
  for (let p = 0; p < a.length; p++) if (e.charAt(p) === "h") {
    let b = _r(i / c[p], l / c[p]) / Dt * 180;
    for (; b < 0; ) b += 360;
    for (; b >= 360; ) b -= 360;
    a[p] = b;
  } else a[p] = a[p] / c[p];
  return u /= r, new h(a, e).alpha(u > 0.99999 ? 1 : u, !0);
}, jr = (t, e) => {
  const n = t.length, r = [0, 0, 0, 0];
  for (let o = 0; o < t.length; o++) {
    const s = t[o], a = e[o] / n, c = s._rgb;
    r[0] += Bt(c[0], 2) * a, r[1] += Bt(c[1], 2) * a, r[2] += Bt(c[2], 2) * a, r[3] += c[3] * a;
  }
  return r[0] = Yt(r[0]), r[1] = Yt(r[1]), r[2] = Yt(r[2]), r[3] > 0.9999999 && (r[3] = 1), new h(ne(r));
}, { pow: $r } = Math;
function Lt(t) {
  let e = "rgb", n = E("#ccc"), r = 0, o = [0, 1], s = [0, 1], a = [], c = [0, 0], l = !1, i = [], u = !1, p = 0, b = 1, g = !1, k = {}, S = !0, y = 1;
  const m = function(d) {
    if (d = d || ["#fff", "#000"], d && A(d) === "string" && E.brewer && E.brewer[d.toLowerCase()] && (d = E.brewer[d.toLowerCase()]), A(d) === "array") {
      d.length === 1 && (d = [d[0], d[0]]), d = d.slice(0);
      for (let w = 0; w < d.length; w++) d[w] = E(d[w]);
      a.length = 0;
      for (let w = 0; w < d.length; w++) a.push(w / (d.length - 1));
    }
    return Y(), i = d;
  }, O = function(d) {
    if (l != null) {
      const w = l.length - 1;
      let L = 0;
      for (; L < w && d >= l[L]; ) L++;
      return L - 1;
    }
    return 0;
  };
  let P = (d) => d, T = (d) => d;
  const R = function(d, w) {
    let L, v;
    if (w == null && (w = !1), isNaN(d) || d === null) return n;
    w ? v = d : l && l.length > 2 ? v = O(d) / (l.length - 2) : b !== p ? v = (d - p) / (b - p) : v = 1, v = T(v), w || (v = P(v)), y !== 1 && (v = $r(v, y)), v = c[0] + v * (1 - c[0] - c[1]), v = nt(v, 0, 1);
    const $ = Math.floor(v * 1e4);
    if (S && k[$]) L = k[$];
    else {
      if (A(i) === "array") for (let M = 0; M < a.length; M++) {
        const D = a[M];
        if (v <= D) {
          L = i[M];
          break;
        }
        if (v >= D && M === a.length - 1) {
          L = i[M];
          break;
        }
        if (v > D && v < a[M + 1]) {
          v = (v - D) / (a[M + 1] - D), L = E.interpolate(i[M], i[M + 1], v, e);
          break;
        }
      }
      else A(i) === "function" && (L = i(v));
      S && (k[$] = L);
    }
    return L;
  };
  var Y = () => k = {};
  m(t);
  const _ = function(d) {
    const w = E(R(d));
    return u && w[u] ? w[u]() : w;
  };
  return _.classes = function(d) {
    if (d != null) {
      if (A(d) === "array") l = d, o = [d[0], d[d.length - 1]];
      else {
        const w = E.analyze(o);
        d === 0 ? l = [w.min, w.max] : l = E.limits(w, "e", d);
      }
      return _;
    }
    return l;
  }, _.domain = function(d) {
    if (!arguments.length) return s;
    s = d.slice(0), p = d[0], b = d[d.length - 1], a = [];
    const w = i.length;
    if (d.length === w && p !== b) for (let L of Array.from(d)) a.push((L - p) / (b - p));
    else {
      for (let L = 0; L < w; L++) a.push(L / (w - 1));
      if (d.length > 2) {
        const L = d.map(($, M) => M / (d.length - 1)), v = d.map(($) => ($ - p) / (b - p));
        v.every(($, M) => L[M] === $) || (T = ($) => {
          if ($ <= 0 || $ >= 1) return $;
          let M = 0;
          for (; $ >= v[M + 1]; ) M++;
          const D = ($ - v[M]) / (v[M + 1] - v[M]);
          return L[M] + D * (L[M + 1] - L[M]);
        });
      }
    }
    return o = [p, b], _;
  }, _.mode = function(d) {
    return arguments.length ? (e = d, Y(), _) : e;
  }, _.range = function(d, w) {
    return m(d), _;
  }, _.out = function(d) {
    return u = d, _;
  }, _.spread = function(d) {
    return arguments.length ? (r = d, _) : r;
  }, _.correctLightness = function(d) {
    return d == null && (d = !0), g = d, Y(), g ? P = function(w) {
      const L = R(0, !0).lab()[0], v = R(1, !0).lab()[0], $ = L > v;
      let M = R(w, !0).lab()[0];
      const D = L + (v - L) * w;
      let et = M - D, wt = 0, pt = 1, vt = 20;
      for (; Math.abs(et) > 0.01 && vt-- > 0; ) (function() {
        return $ && (et *= -1), et < 0 ? (wt = w, w += (pt - w) * 0.5) : (pt = w, w += (wt - w) * 0.5), M = R(w, !0).lab()[0], et = M - D;
      })();
      return w;
    } : P = (w) => w, _;
  }, _.padding = function(d) {
    return d != null ? (A(d) === "number" && (d = [d, d]), c = d, _) : c;
  }, _.colors = function(d, w) {
    arguments.length < 2 && (w = "hex");
    let L = [];
    if (arguments.length === 0) L = i.slice(0);
    else if (d === 1) L = [_(0.5)];
    else if (d > 1) {
      const v = o[0], $ = o[1] - v;
      L = Pr(0, d).map((M) => _(v + M / (d - 1) * $));
    } else {
      t = [];
      let v = [];
      if (l && l.length > 2) for (let $ = 1, M = l.length, D = 1 <= M; D ? $ < M : $ > M; D ? $++ : $--) v.push((l[$ - 1] + l[$]) * 0.5);
      else v = o;
      L = v.map(($) => _($));
    }
    return E[w] && (L = L.map((v) => v[w]())), L;
  }, _.cache = function(d) {
    return d != null ? (S = d, _) : S;
  }, _.gamma = function(d) {
    return d != null ? (y = d, _) : y;
  }, _.nodata = function(d) {
    return d != null ? (n = E(d), _) : n;
  }, _;
}
function Pr(t, e, n) {
  let r = [], o = t < e, s = e;
  for (let a = t; o ? a < s : a > s; o ? a++ : a--) r.push(a);
  return r;
}
const Or = function(t) {
  let e = [1, 1];
  for (let n = 1; n < t; n++) {
    let r = [1];
    for (let o = 1; o <= e.length; o++) r[o] = (e[o] || 0) + e[o - 1];
    e = r;
  }
  return e;
}, Tr = function(t) {
  let e, n, r, o;
  if (t = t.map((s) => new h(s)), t.length === 2) [n, r] = t.map((s) => s.lab()), e = function(s) {
    const a = [0, 1, 2].map((c) => n[c] + s * (r[c] - n[c]));
    return new h(a, "lab");
  };
  else if (t.length === 3) [n, r, o] = t.map((s) => s.lab()), e = function(s) {
    const a = [0, 1, 2].map((c) => (1 - s) * (1 - s) * n[c] + 2 * (1 - s) * s * r[c] + s * s * o[c]);
    return new h(a, "lab");
  };
  else if (t.length === 4) {
    let s;
    [n, r, o, s] = t.map((a) => a.lab()), e = function(a) {
      const c = [0, 1, 2].map((l) => (1 - a) * (1 - a) * (1 - a) * n[l] + 3 * (1 - a) * (1 - a) * a * r[l] + 3 * (1 - a) * a * a * o[l] + a * a * a * s[l]);
      return new h(c, "lab");
    };
  } else if (t.length >= 5) {
    let s, a, c;
    s = t.map((l) => l.lab()), c = t.length - 1, a = Or(c), e = function(l) {
      const i = 1 - l, u = [0, 1, 2].map((p) => s.reduce((b, g, k) => b + a[k] * i ** (c - k) * l ** k * g[p], 0));
      return new h(u, "lab");
    };
  } else throw new RangeError("No point in running bezier with only one color.");
  return e;
}, Rr = (t) => {
  const e = Tr(t);
  return e.scale = () => Lt(e), e;
}, { round: he } = Math;
h.prototype.rgb = function(t = !0) {
  return t === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(he);
}, h.prototype.rgba = function(t = !0) {
  return this._rgb.slice(0, 4).map((e, n) => n < 3 ? t === !1 ? e : he(e) : e);
};
const Ur = (...t) => new h(...t, "rgb");
Object.assign(E, { rgb: Ur }), x.format.rgb = (...t) => {
  const e = N(t, "rgba");
  return e[3] === void 0 && (e[3] = 1), e;
}, x.autodetect.push({ p: 3, test: (...t) => {
  if (t = N(t, "rgba"), A(t) === "array" && (t.length === 3 || t.length === 4 && A(t[3]) == "number" && t[3] >= 0 && t[3] <= 1)) return "rgb";
} });
const W = (t, e, n) => {
  if (!W[n]) throw new Error("unknown blend mode " + n);
  return W[n](t, e);
}, J = (t) => (e, n) => {
  const r = E(n).rgb(), o = E(e).rgb();
  return E.rgb(t(r, o));
}, tt = (t) => (e, n) => {
  const r = [];
  return r[0] = t(e[0], n[0]), r[1] = t(e[1], n[1]), r[2] = t(e[2], n[2]), r;
}, Ir = (t) => t, Br = (t, e) => t * e / 255, Yr = (t, e) => t > e ? e : t, Dr = (t, e) => t > e ? t : e, Gr = (t, e) => 255 * (1 - (1 - t / 255) * (1 - e / 255)), zr = (t, e) => e < 128 ? 2 * t * e / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - e / 255)), Zr = (t, e) => 255 * (1 - (1 - e / 255) / (t / 255)), qr = (t, e) => t === 255 ? 255 : (t = 255 * (e / 255) / (1 - t / 255), t > 255 ? 255 : t);
W.normal = J(tt(Ir)), W.multiply = J(tt(Br)), W.screen = J(tt(Gr)), W.overlay = J(tt(zr)), W.darken = J(tt(Yr)), W.lighten = J(tt(Dr)), W.dodge = J(tt(qr)), W.burn = J(tt(Zr));
const { pow: Wr, sin: Xr, cos: Hr } = Math;
function Vr(t = 300, e = -1.5, n = 1, r = 1, o = [0, 1]) {
  let s = 0, a;
  A(o) === "array" ? a = o[1] - o[0] : (a = 0, o = [o, o]);
  const c = function(l) {
    const i = F * ((t + 120) / 360 + e * l), u = Wr(o[0] + a * l, r), p = (s !== 0 ? n[0] + l * s : n) * u * (1 - u) / 2, b = Hr(i), g = Xr(i), k = u + p * (-0.14861 * b + 1.78277 * g), S = u + p * (-0.29227 * b - 0.90649 * g), y = u + p * (1.97294 * b);
    return E(ne([k * 255, S * 255, y * 255, 1]));
  };
  return c.start = function(l) {
    return l == null ? t : (t = l, c);
  }, c.rotations = function(l) {
    return l == null ? e : (e = l, c);
  }, c.gamma = function(l) {
    return l == null ? r : (r = l, c);
  }, c.hue = function(l) {
    return l == null ? n : (n = l, A(n) === "array" ? (s = n[1] - n[0], s === 0 && (n = n[1])) : s = 0, c);
  }, c.lightness = function(l) {
    return l == null ? o : (A(l) === "array" ? (o = l, a = l[1] - l[0]) : (o = [l, l], a = 0), c);
  }, c.scale = () => E.scale(c), c.hue(n), c;
}
const Fr = "0123456789abcdef", { floor: Kr, random: Qr } = Math, Jr = (t = Qr) => {
  let e = "#";
  for (let n = 0; n < 6; n++) e += Fr.charAt(Kr(t() * 16));
  return new h(e, "hex");
}, { log: pe, pow: to, floor: eo, abs: no } = Math;
function Ze(t, e = null) {
  const n = { min: Number.MAX_VALUE, max: Number.MAX_VALUE * -1, sum: 0, values: [], count: 0 };
  return A(t) === "object" && (t = Object.values(t)), t.forEach((r) => {
    e && A(r) === "object" && (r = r[e]), r != null && !isNaN(r) && (n.values.push(r), n.sum += r, r < n.min && (n.min = r), r > n.max && (n.max = r), n.count += 1);
  }), n.domain = [n.min, n.max], n.limits = (r, o) => qe(n, r, o), n;
}
function qe(t, e = "equal", n = 7) {
  A(t) == "array" && (t = Ze(t));
  const { min: r, max: o } = t, s = t.values.sort((c, l) => c - l);
  if (n === 1) return [r, o];
  const a = [];
  if (e.substr(0, 1) === "c" && (a.push(r), a.push(o)), e.substr(0, 1) === "e") {
    a.push(r);
    for (let c = 1; c < n; c++) a.push(r + c / n * (o - r));
    a.push(o);
  } else if (e.substr(0, 1) === "l") {
    if (r <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
    const c = Math.LOG10E * pe(r), l = Math.LOG10E * pe(o);
    a.push(r);
    for (let i = 1; i < n; i++) a.push(to(10, c + i / n * (l - c)));
    a.push(o);
  } else if (e.substr(0, 1) === "q") {
    a.push(r);
    for (let c = 1; c < n; c++) {
      const l = (s.length - 1) * c / n, i = eo(l);
      if (i === l) a.push(s[i]);
      else {
        const u = l - i;
        a.push(s[i] * (1 - u) + s[i + 1] * u);
      }
    }
    a.push(o);
  } else if (e.substr(0, 1) === "k") {
    let c;
    const l = s.length, i = new Array(l), u = new Array(n);
    let p = !0, b = 0, g = null;
    g = [], g.push(r);
    for (let y = 1; y < n; y++) g.push(r + y / n * (o - r));
    for (g.push(o); p; ) {
      for (let m = 0; m < n; m++) u[m] = 0;
      for (let m = 0; m < l; m++) {
        const O = s[m];
        let P = Number.MAX_VALUE, T;
        for (let R = 0; R < n; R++) {
          const Y = no(g[R] - O);
          Y < P && (P = Y, T = R), u[T]++, i[m] = T;
        }
      }
      const y = new Array(n);
      for (let m = 0; m < n; m++) y[m] = null;
      for (let m = 0; m < l; m++) c = i[m], y[c] === null ? y[c] = s[m] : y[c] += s[m];
      for (let m = 0; m < n; m++) y[m] *= 1 / u[m];
      p = !1;
      for (let m = 0; m < n; m++) if (y[m] !== g[m]) {
        p = !0;
        break;
      }
      g = y, b++, b > 200 && (p = !1);
    }
    const k = {};
    for (let y = 0; y < n; y++) k[y] = [];
    for (let y = 0; y < l; y++) c = i[y], k[c].push(s[y]);
    let S = [];
    for (let y = 0; y < n; y++) S.push(k[y][0]), S.push(k[y][k[y].length - 1]);
    S = S.sort((y, m) => y - m), a.push(S[0]);
    for (let y = 1; y < S.length; y += 2) {
      const m = S[y];
      !isNaN(m) && a.indexOf(m) === -1 && a.push(m);
    }
  }
  return a;
}
const ro = (t, e) => {
  t = new h(t), e = new h(e);
  const n = t.luminance(), r = e.luminance();
  return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
};
const be = 0.027, oo = 5e-4, ao = 0.1, me = 1.14, Ct = 0.022, ge = 1.414, so = (t, e) => {
  t = new h(t), e = new h(e), t.alpha() < 1 && (t = it(e, t, t.alpha(), "rgb"));
  const n = ye(...t.rgb()), r = ye(...e.rgb()), o = n >= Ct ? n : n + Math.pow(Ct - n, ge), s = r >= Ct ? r : r + Math.pow(Ct - r, ge), a = Math.pow(s, 0.56) - Math.pow(o, 0.57), c = Math.pow(s, 0.65) - Math.pow(o, 0.62), l = Math.abs(s - o) < oo ? 0 : o < s ? a * me : c * me;
  return (Math.abs(l) < ao ? 0 : l > 0 ? l - be : l + be) * 100;
};
function ye(t, e, n) {
  return 0.2126729 * Math.pow(t / 255, 2.4) + 0.7151522 * Math.pow(e / 255, 2.4) + 0.072175 * Math.pow(n / 255, 2.4);
}
const { sqrt: V, pow: U, min: co, max: lo, atan2: we, abs: ve, cos: Mt, sin: ke, exp: io, PI: Ce } = Math;
function fo(t, e, n = 1, r = 1, o = 1) {
  var s = function(Pt) {
    return 360 * Pt / (2 * Ce);
  }, a = function(Pt) {
    return 2 * Ce * Pt / 360;
  };
  t = new h(t), e = new h(e);
  const [c, l, i] = Array.from(t.lab()), [u, p, b] = Array.from(e.lab()), g = (c + u) / 2, k = V(U(l, 2) + U(i, 2)), S = V(U(p, 2) + U(b, 2)), y = (k + S) / 2, m = 0.5 * (1 - V(U(y, 7) / (U(y, 7) + U(25, 7)))), O = l * (1 + m), P = p * (1 + m), T = V(U(O, 2) + U(i, 2)), R = V(U(P, 2) + U(b, 2)), Y = (T + R) / 2, _ = s(we(i, O)), d = s(we(b, P)), w = _ >= 0 ? _ : _ + 360, L = d >= 0 ? d : d + 360, v = ve(w - L) > 180 ? (w + L + 360) / 2 : (w + L) / 2, $ = 1 - 0.17 * Mt(a(v - 30)) + 0.24 * Mt(a(2 * v)) + 0.32 * Mt(a(3 * v + 6)) - 0.2 * Mt(a(4 * v - 63));
  let M = L - w;
  M = ve(M) <= 180 ? M : L <= w ? M + 360 : M - 360, M = 2 * V(T * R) * ke(a(M) / 2);
  const D = u - c, et = R - T, wt = 1 + 0.015 * U(g - 50, 2) / V(20 + U(g - 50, 2)), pt = 1 + 0.045 * Y, vt = 1 + 0.015 * Y * $, xn = 30 * io(-U((v - 275) / 25, 2)), Nn = -(2 * V(U(Y, 7) / (U(Y, 7) + U(25, 7)))) * ke(2 * a(xn)), Ln = V(U(D / (n * wt), 2) + U(et / (r * pt), 2) + U(M / (o * vt), 2) + Nn * (et / (r * pt)) * (M / (o * vt)));
  return lo(0, co(100, Ln));
}
function uo(t, e, n = "lab") {
  t = new h(t), e = new h(e);
  const r = t.get(n), o = e.get(n);
  let s = 0;
  for (let a in r) {
    const c = (r[a] || 0) - (o[a] || 0);
    s += c * c;
  }
  return Math.sqrt(s);
}
const ho = (...t) => {
  try {
    return new h(...t), !0;
  } catch {
    return !1;
  }
}, po = { cool() {
  return Lt([E.hsl(180, 1, 0.9), E.hsl(250, 0.7, 0.4)]);
}, hot() {
  return Lt(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
} }, Kt = { OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"], PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"], BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"], Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"], BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"], YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"], YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"], Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"], RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"], Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"], YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"], Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"], GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"], Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"], YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"], PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"], Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"], PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"], Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"], Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"], RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"], RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"], PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"], PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"], RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"], BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"], RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"], PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"], Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"], Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"], Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"], Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"], Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"], Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"], Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"], Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"] }, We = Object.keys(Kt), Me = new Map(We.map((t) => [t.toLowerCase(), t])), bo = typeof Proxy == "function" ? new Proxy(Kt, { get(t, e) {
  const n = e.toLowerCase();
  if (Me.has(n)) return t[Me.get(n)];
}, getOwnPropertyNames() {
  return Object.getOwnPropertyNames(We);
} }) : Kt, mo = (...t) => {
  t = N(t, "cmyk");
  const [e, n, r, o] = t, s = t.length > 4 ? t[4] : 1;
  return o === 1 ? [0, 0, 0, s] : [e >= 1 ? 0 : 255 * (1 - e) * (1 - o), n >= 1 ? 0 : 255 * (1 - n) * (1 - o), r >= 1 ? 0 : 255 * (1 - r) * (1 - o), s];
}, { max: xe } = Math, go = (...t) => {
  let [e, n, r] = N(t, "rgb");
  e = e / 255, n = n / 255, r = r / 255;
  const o = 1 - xe(e, xe(n, r)), s = o < 1 ? 1 / (1 - o) : 0, a = (1 - e - o) * s, c = (1 - n - o) * s, l = (1 - r - o) * s;
  return [a, c, l, o];
};
h.prototype.cmyk = function() {
  return go(this._rgb);
};
const yo = (...t) => new h(...t, "cmyk");
Object.assign(E, { cmyk: yo }), x.format.cmyk = mo, x.autodetect.push({ p: 2, test: (...t) => {
  if (t = N(t, "cmyk"), A(t) === "array" && t.length === 4) return "cmyk";
} });
const wo = (...t) => {
  const e = N(t, "hsla");
  let n = ft(t) || "lsa";
  return e[0] = Z(e[0] || 0) + "deg", e[1] = Z(e[1] * 100) + "%", e[2] = Z(e[2] * 100) + "%", n === "hsla" || e.length > 3 && e[3] < 1 ? (e[3] = "/ " + (e.length > 3 ? e[3] : 1), n = "hsla") : e.length = 3, `${n.substr(0, 3)}(${e.join(" ")})`;
}, vo = (...t) => {
  const e = N(t, "lab");
  let n = ft(t) || "lab";
  return e[0] = Z(e[0]) + "%", e[1] = Z(e[1]), e[2] = Z(e[2]), n === "laba" || e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `lab(${e.join(" ")})`;
}, ko = (...t) => {
  const e = N(t, "lch");
  let n = ft(t) || "lab";
  return e[0] = Z(e[0]) + "%", e[1] = Z(e[1]), e[2] = isNaN(e[2]) ? "none" : Z(e[2]) + "deg", n === "lcha" || e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `lch(${e.join(" ")})`;
}, Co = (...t) => {
  const e = N(t, "lab");
  return e[0] = Z(e[0] * 100) + "%", e[1] = Ht(e[1]), e[2] = Ht(e[2]), e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `oklab(${e.join(" ")})`;
}, Xe = (...t) => {
  const [e, n, r, ...o] = N(t, "rgb"), [s, a, c] = ce(e, n, r), [l, i, u] = Ge(s, a, c);
  return [l, i, u, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
}, Mo = (...t) => {
  const e = N(t, "lch");
  return e[0] = Z(e[0] * 100) + "%", e[1] = Ht(e[1]), e[2] = isNaN(e[2]) ? "none" : Z(e[2]) + "deg", e.length > 3 && e[3] < 1 ? e[3] = "/ " + (e.length > 3 ? e[3] : 1) : e.length = 3, `oklch(${e.join(" ")})`;
}, { round: Gt } = Math, xo = (...t) => {
  const e = N(t, "rgba");
  let n = ft(t) || "rgb";
  if (n.substr(0, 3) === "hsl") return wo(ze(e), n);
  if (n.substr(0, 3) === "lab") {
    const r = gt();
    K("d50");
    const o = vo(oe(e), n);
    return K(r), o;
  }
  if (n.substr(0, 3) === "lch") {
    const r = gt();
    K("d50");
    const o = ko(Vt(e), n);
    return K(r), o;
  }
  return n.substr(0, 5) === "oklab" ? Co(ce(e)) : n.substr(0, 5) === "oklch" ? Mo(Xe(e)) : (e[0] = Gt(e[0]), e[1] = Gt(e[1]), e[2] = Gt(e[2]), (n === "rgba" || e.length > 3 && e[3] < 1) && (e[3] = "/ " + (e.length > 3 ? e[3] : 1), n = "rgba"), `${n.substr(0, 3)}(${e.slice(0, n === "rgb" ? 3 : 4).join(" ")})`);
}, He = (...t) => {
  t = N(t, "lch");
  const [e, n, r, ...o] = t, [s, a, c] = De(e, n, r), [l, i, u] = se(s, a, c);
  return [l, i, u, ...o.length > 0 && o[0] < 1 ? [o[0]] : []];
}, Q = /((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source, X = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source, At = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source, q = /\s*/.source, dt = /\s+/.source, le = /\s*,\s*/.source, $t = /((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source, ht = /\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source, Ve = new RegExp("^rgba?\\(" + q + [Q, Q, Q].join(dt) + ht + "\\)$"), Fe = new RegExp("^rgb\\(" + q + [Q, Q, Q].join(le) + q + "\\)$"), Ke = new RegExp("^rgba\\(" + q + [Q, Q, Q, X].join(le) + q + "\\)$"), Qe = new RegExp("^hsla?\\(" + q + [$t, At, At].join(dt) + ht + "\\)$"), Je = new RegExp("^hsl?\\(" + q + [$t, At, At].join(le) + q + "\\)$"), tn = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, en = new RegExp("^lab\\(" + q + [X, X, X].join(dt) + ht + "\\)$"), nn = new RegExp("^lch\\(" + q + [X, X, $t].join(dt) + ht + "\\)$"), rn = new RegExp("^oklab\\(" + q + [X, X, X].join(dt) + ht + "\\)$"), on = new RegExp("^oklch\\(" + q + [X, X, $t].join(dt) + ht + "\\)$"), { round: an } = Math, st = (t) => t.map((e, n) => n <= 2 ? nt(an(e), 0, 255) : e), I = (t, e = 0, n = 100, r = !1) => (typeof t == "string" && t.endsWith("%") && (t = parseFloat(t.substring(0, t.length - 1)) / 100, r ? t = e + (t + 1) * 0.5 * (n - e) : t = e + t * (n - e)), +t), G = (t, e) => t === "none" ? e : t, Qt = (t) => {
  if (t = t.toLowerCase().trim(), t === "transparent") return [0, 0, 0, 0];
  let e;
  if (x.format.named) try {
    return x.format.named(t);
  } catch {
  }
  if ((e = t.match(Ve)) || (e = t.match(Fe))) {
    let n = e.slice(1, 4);
    for (let o = 0; o < 3; o++) n[o] = +I(G(n[o], 0), 0, 255);
    n = st(n);
    const r = e[4] !== void 0 ? +I(e[4], 0, 1) : 1;
    return n[3] = r, n;
  }
  if (e = t.match(Ke)) {
    const n = e.slice(1, 5);
    for (let r = 0; r < 4; r++) n[r] = +I(n[r], 0, 255);
    return n;
  }
  if ((e = t.match(Qe)) || (e = t.match(Je))) {
    const n = e.slice(1, 4);
    n[0] = +G(n[0].replace("deg", ""), 0), n[1] = +I(G(n[1], 0), 0, 100) * 0.01, n[2] = +I(G(n[2], 0), 0, 100) * 0.01;
    const r = st(Ft(n)), o = e[4] !== void 0 ? +I(e[4], 0, 1) : 1;
    return r[3] = o, r;
  }
  if (e = t.match(tn)) {
    const n = e.slice(1, 4);
    n[1] *= 0.01, n[2] *= 0.01;
    const r = Ft(n);
    for (let o = 0; o < 3; o++) r[o] = an(r[o]);
    return r[3] = +e[4], r;
  }
  if (e = t.match(en)) {
    const n = e.slice(1, 4);
    n[0] = I(G(n[0], 0), 0, 100), n[1] = I(G(n[1], 0), -125, 125, !0), n[2] = I(G(n[2], 0), -125, 125, !0);
    const r = gt();
    K("d50");
    const o = st(re(n));
    K(r);
    const s = e[4] !== void 0 ? +I(e[4], 0, 1) : 1;
    return o[3] = s, o;
  }
  if (e = t.match(nn)) {
    const n = e.slice(1, 4);
    n[0] = I(n[0], 0, 100), n[1] = I(G(n[1], 0), 0, 150, !1), n[2] = +G(n[2].replace("deg", ""), 0);
    const r = gt();
    K("d50");
    const o = st(ae(n));
    K(r);
    const s = e[4] !== void 0 ? +I(e[4], 0, 1) : 1;
    return o[3] = s, o;
  }
  if (e = t.match(rn)) {
    const n = e.slice(1, 4);
    n[0] = I(G(n[0], 0), 0, 1), n[1] = I(G(n[1], 0), -0.4, 0.4, !0), n[2] = I(G(n[2], 0), -0.4, 0.4, !0);
    const r = st(se(n)), o = e[4] !== void 0 ? +I(e[4], 0, 1) : 1;
    return r[3] = o, r;
  }
  if (e = t.match(on)) {
    const n = e.slice(1, 4);
    n[0] = I(G(n[0], 0), 0, 1), n[1] = I(G(n[1], 0), 0, 0.4, !1), n[2] = +G(n[2].replace("deg", ""), 0);
    const r = st(He(n)), o = e[4] !== void 0 ? +I(e[4], 0, 1) : 1;
    return r[3] = o, r;
  }
};
Qt.test = (t) => Ve.test(t) || Qe.test(t) || en.test(t) || nn.test(t) || rn.test(t) || on.test(t) || Fe.test(t) || Ke.test(t) || Je.test(t) || tn.test(t) || t === "transparent", h.prototype.css = function(t) {
  return xo(this._rgb, t);
};
const No = (...t) => new h(...t, "css");
E.css = No, x.format.css = Qt, x.autodetect.push({ p: 5, test: (t, ...e) => {
  if (!e.length && A(t) === "string" && Qt.test(t)) return "css";
} }), x.format.gl = (...t) => {
  const e = N(t, "rgba");
  return e[0] *= 255, e[1] *= 255, e[2] *= 255, e;
};
const Lo = (...t) => new h(...t, "gl");
E.gl = Lo, h.prototype.gl = function() {
  const t = this._rgb;
  return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]];
}, h.prototype.hex = function(t) {
  return Ie(this._rgb, t);
};
const Ao = (...t) => new h(...t, "hex");
E.hex = Ao, x.format.hex = Ue, x.autodetect.push({ p: 4, test: (t, ...e) => {
  if (!e.length && A(t) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return "hex";
} });
const { log: xt } = Math, sn = (t) => {
  const e = t / 100;
  let n, r, o;
  return e < 66 ? (n = 255, r = e < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = e - 2) + 104.49216199393888 * xt(r), o = e < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (o = e - 10) + 115.67994401066147 * xt(o)) : (n = 351.97690566805693 + 0.114206453784165 * (n = e - 55) - 40.25366309332127 * xt(n), r = 325.4494125711974 + 0.07943456536662342 * (r = e - 50) - 28.0852963507957 * xt(r), o = 255), [n, r, o, 1];
}, { round: Eo } = Math, _o = (...t) => {
  const e = N(t, "rgb"), n = e[0], r = e[2];
  let o = 1e3, s = 4e4;
  const a = 0.4;
  let c;
  for (; s - o > a; ) {
    c = (s + o) * 0.5;
    const l = sn(c);
    l[2] / l[0] >= r / n ? s = c : o = c;
  }
  return Eo(c);
};
h.prototype.temp = h.prototype.kelvin = h.prototype.temperature = function() {
  return _o(this._rgb);
};
const zt = (...t) => new h(...t, "temp");
Object.assign(E, { temp: zt, kelvin: zt, temperature: zt }), x.format.temp = x.format.kelvin = x.format.temperature = sn, h.prototype.oklch = function() {
  return Xe(this._rgb);
};
const So = (...t) => new h(...t, "oklch");
Object.assign(E, { oklch: So }), x.format.oklch = He, x.autodetect.push({ p: 2, test: (...t) => {
  if (t = N(t, "oklch"), A(t) === "array" && t.length === 3) return "oklch";
} }), Object.assign(E, { analyze: Ze, average: Sr, bezier: Rr, blend: W, brewer: bo, Color: h, colors: ct, contrast: ro, contrastAPCA: so, cubehelix: Vr, deltaE: fo, distance: uo, input: x, interpolate: it, limits: qe, mix: it, random: Jr, scale: Lt, scales: po, valid: ho });
function cn(t = "viridis") {
  const e = t.endsWith("_r"), n = e ? t.slice(0, -2) : t;
  try {
    const r = E.scale(n).colors(256);
    return e ? r.reverse() : r;
  } catch {
    return E.scale("viridis").colors(256);
  }
}
const jo = 2e4;
function yt(t) {
  return t.replace(/\/+$/, "");
}
function $o(t) {
  return t.toUpperCase().replace(/[^A-Z0-9]/g, "").endsWith("CRS84") ? "EPSG:4326" : t;
}
function Po(t) {
  const e = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(t);
  if (!e) return null;
  const n = (o) => o ? Number(o) : 0, r = { years: n(e[1]), months: n(e[2]), weeks: n(e[3]), days: n(e[4]), hours: n(e[5]), minutes: n(e[6]), seconds: n(e[7]) };
  return Object.values(r).every((o) => o === 0) ? null : r;
}
function Oo(t, e) {
  const n = new Date(t.getTime());
  return e.years && n.setUTCFullYear(n.getUTCFullYear() + e.years), e.months && n.setUTCMonth(n.getUTCMonth() + e.months), (e.weeks || e.days) && n.setUTCDate(n.getUTCDate() + e.weeks * 7 + e.days), e.hours && n.setUTCHours(n.getUTCHours() + e.hours), e.minutes && n.setUTCMinutes(n.getUTCMinutes() + e.minutes), e.seconds && n.setUTCSeconds(n.getUTCSeconds() + e.seconds), n;
}
function To(t, e, n) {
  const r = Po(n), o = new Date(t), s = new Date(e);
  if (!r || Number.isNaN(o.getTime()) || Number.isNaN(s.getTime())) return [];
  const a = r.hours > 0 || r.minutes > 0 || r.seconds > 0, c = [];
  let l = o;
  for (; l.getTime() <= s.getTime() && c.length < jo; ) {
    c.push(a ? l.toISOString().slice(0, 16).replace("T", " ") : l.toISOString().slice(0, 10));
    const i = Oo(l, r);
    if (i.getTime() <= l.getTime()) break;
    l = i;
  }
  return c;
}
function Ro(t) {
  return Object.entries(t).filter(([, e]) => {
    const n = e;
    return n.type !== "spatial" && n.type !== "bands" && (Array.isArray(n.values) || n.extent);
  }).map(([e]) => e);
}
function Uo(t) {
  const e = t["open_climate_service:control"];
  return e === "slider" || e === "dropdown" ? e : t.type === "temporal" || typeof t.step == "number" ? "slider" : "dropdown";
}
function Io(t, e) {
  return e.type === "temporal" ? "Time step" : t === "dayofyear" ? "Day of year" : t.charAt(0).toUpperCase() + t.slice(1).replace(/_/g, " ");
}
function Bo(t) {
  if (Array.isArray(t.values)) return t.values;
  const e = t.extent;
  return Array.isArray(e) && e.length === 2 && t.step != null ? To(String(e[0]), String(e[1]), String(t.step)) : [];
}
const Yo = { PT1H: "Hourly", P1D: "Daily", P7D: "Weekly", P1M: "Monthly", P3M: "Seasonal", P1Y: "Yearly" };
function Do(t) {
  for (const e of Object.values(t)) {
    const n = e;
    if (n.type === "temporal" && typeof n.step == "string" && n.step) return Yo[n.step] ?? n.step;
  }
  return null;
}
async function Go(t) {
  try {
    const e = await fetch(`${yt(t)}/extent`);
    if (!e.ok) return null;
    const n = await e.json(), r = n.bbox;
    return !Array.isArray(r) || r.length !== 4 || !r.every((o) => typeof o == "number") ? null : { name: typeof n.name == "string" && n.name ? n.name : null, bbox: [r[0], r[1], r[2], r[3]] };
  } catch {
    return null;
  }
}
async function zo(t) {
  try {
    const e = await fetch(`${yt(t)}/features`);
    if (!e.ok) return /* @__PURE__ */ new Set();
    const n = await e.json(), r = Array.isArray(n.items) ? n.items : [];
    return new Set(r.map((o) => o.id).filter((o) => typeof o == "string" && o.length > 0));
  } catch {
    return /* @__PURE__ */ new Set();
  }
}
async function Zo(t) {
  const e = yt(t), [n, r] = await Promise.all([fetch(`${e}/stac`), zo(e)]);
  if (!n.ok) throw new Error(`STAC catalog fetch failed (HTTP ${n.status})`);
  const o = await n.json();
  return (Array.isArray(o.links) ? o.links : []).filter((s) => s.rel === "child").map((s) => {
    const a = yt(String(s.href)).split("/").pop() ?? "";
    return { id: a, title: typeof s.title == "string" && s.title ? s.title : a, href: String(s.href), kind: r.has(a) ? "vector" : "raster" };
  }).filter((s) => s.id.length > 0);
}
const qo = { fillColor: "#0066cc", fillOpacity: 0.15, strokeColor: "#1e3a5f", strokeWidth: 1 };
function Wo(t) {
  const e = { ...qo }, n = Array.isArray(t?.layers) ? t.layers : [], r = n.find((s) => s.type === "fill")?.paint ?? {}, o = n.find((s) => s.type === "line")?.paint ?? {};
  return typeof r["fill-color"] == "string" && (e.fillColor = r["fill-color"]), typeof r["fill-opacity"] == "number" && (e.fillOpacity = r["fill-opacity"]), typeof o["line-color"] == "string" && (e.strokeColor = o["line-color"]), typeof o["line-width"] == "number" && (e.strokeWidth = o["line-width"]), e;
}
async function Xo(t) {
  const e = t.assets?.style?.href;
  if (typeof e != "string" || !e) return null;
  try {
    const n = await fetch(e);
    return n.ok ? await n.json() : null;
  } catch {
    return null;
  }
}
function Ho(t, e = null) {
  const n = (Array.isArray(t.links) ? t.links : []).find((u) => u.rel === "pmtiles" && typeof u.href == "string"), r = t.assets?.tiles?.href ?? n?.href;
  if (typeof r != "string" || !r) throw new Error("No PMTiles asset found in this feature collection");
  const o = n?.["pmtiles:layers"], s = Array.isArray(o) && o.length > 0 && o.every((u) => typeof u == "string") ? o : ["features"], a = t.extent?.spatial?.bbox?.[0], c = Array.isArray(a) && a.length === 4 && a.every((u) => typeof u == "number") ? [a[0], a[1], a[2], a[3]] : null, l = typeof t["table:row_count"] == "number" ? t["table:row_count"] : null, i = Object.values(e?.sources ?? {}).find((u) => typeof u?.attribution == "string")?.attribution ?? null;
  return { id: String(t.id), title: typeof t.title == "string" && t.title ? t.title : String(t.id), pmtilesHref: r, sourceLayers: s, style: Wo(e), bbox: c, featureCount: l, attribution: i };
}
async function ln(t, e) {
  const n = yt(t), r = await fetch(`${n}/stac/collections/${encodeURIComponent(e)}`);
  if (!r.ok) throw new Error(`Collection '${e}' fetch failed (HTTP ${r.status})`);
  return await r.json();
}
function Vo(t) {
  const e = t.renders?.default ?? {}, n = t.assets?.zarr;
  if (!n?.href) throw new Error("No Zarr asset found in this collection");
  const r = Array.isArray(e.rescale?.[0]) ? e.rescale[0] : [0, 100], o = e.colormap_name ?? "viridis", s = e.nodata ?? null, a = e["open_climate_service:variable"] ?? Object.keys(t["cube:variables"] ?? {})[0] ?? "data", c = t["cube:dimensions"] ?? {}, l = Ro(c).map((m) => {
    const O = c[m], P = Bo(O), T = Uo(O), R = P.length, Y = T === "slider" ? Math.max(0, R - 1) : 0;
    return { key: m, label: Io(m, O), control: T, steps: P, count: R, index: Y, isTemporal: O.type === "temporal" };
  }).filter((m) => m.count >= 1), i = $o(t["proj:code"] ?? "EPSG:4326"), u = t["open_climate_service:proj4"] ?? null, p = t["proj:bbox"], b = Array.isArray(p) && p.length === 4 && p.every((m) => typeof m == "number") ? [p[0], p[1], p[2], p[3]] : null, g = n["zarr:zarr_format"] ?? null, k = t["cube:variables"]?.[a]?.unit ?? "", S = (Array.isArray(t.keywords) ? t.keywords : []).find((m) => m !== "zarr" && m !== "stac" && m !== a && m !== t.id) ?? null, y = Do(c);
  return { datasetId: t.id, zarrHref: n.href, variable: a, clim: r, colormapName: o, fillValue: s, crs: i, proj4: u, bounds: b, zarrVersion: g, units: k, source: S, temporalResolution: y, dims: l };
}
const fn = "open-climate-service", Zt = "ocs-panel", Ne = "ocsUrl", Le = "dataset", Ae = "features", qt = "https://ocs-demo-nepal.dhis2.org", f = { ocsUrl: "", collections: [], instanceExtent: null, datasetId: null, spec: null, selector: {}, nativeLayerId: null, temporalDetach: null, style: { colormapName: "viridis", clim: [0, 100], opacity: 1 }, vectors: /* @__PURE__ */ new Map() }, Fo = ["viridis", "turbo", "magma", "plasma", "inferno", "cividis", "RdBu_r", "RdYlBu_r", "Spectral_r", "Blues", "Reds", "Greens", "YlGnBu", "YlOrRd"];
function C(t, e, n) {
  const r = document.createElement(t);
  return e && (r.className = e), n != null && (r.textContent = n), r;
}
function Ee(t, e) {
  const n = C("button", "ocs-btn", t);
  return n.type = "button", n.addEventListener("click", e), n;
}
let j = null;
function z(t, e = !1) {
  j && (j.status.textContent = t, j.status.classList.toggle("ocs-error", e));
}
function un(t) {
  return `OCS: ${t.datasetId}`;
}
function dn(t) {
  const e = t.zarrVersion === 2 || t.zarrVersion === 3 ? t.zarrVersion : void 0;
  return { variable: t.variable, selector: { ...f.selector }, clim: f.style.clim, colormap: cn(f.style.colormapName), opacity: f.style.opacity, ...e != null ? { zarrVersion: e } : {}, ...t.crs ? { crs: t.crs } : {}, ...t.proj4 != null ? { proj4: t.proj4 } : {}, ...t.bounds ? { bounds: t.bounds } : {}, ..._e() ? { beforeLayerId: _e() } : {} };
}
function _e() {
  const t = [...f.vectors.keys()].map(rt);
  if (t.length === 0) return;
  const e = f.app?.getLayers?.();
  return e ? e.find((n) => t.includes(n)) ?? t[0] : t[0];
}
function Ko(t) {
  const e = f.app?.getLayers?.();
  if (!e) return !0;
  const n = e.indexOf(t);
  return [...f.vectors.keys()].some((r) => {
    const o = e.indexOf(rt(r));
    return o >= 0 && n > o;
  });
}
function Et() {
  f.temporalDetach && (f.temporalDetach(), f.temporalDetach = null);
  const t = f.app?.getMap?.();
  if (f.nativeLayerId) {
    if (t) try {
      t.removeLayer(f.nativeLayerId);
    } catch {
    }
    f.app?.unregisterExternalNativeLayer?.(f.nativeLayerId);
  }
  f.nativeLayerId = null;
}
function Jt() {
  f.nativeLayerId && f.app?.setZarrLayerSelector?.(f.nativeLayerId, { ...f.selector });
}
function Qo(t) {
  return new Date(String(t).replace(" ", "T")).getTime();
}
function Jo(t, e) {
  const n = e.getTime();
  let r = -1, o = 1 / 0;
  for (let s = 0; s < t.length; s++) {
    const a = Qo(t[s]);
    if (Number.isNaN(a)) continue;
    const c = Math.abs(a - n);
    c < o && (o = c, r = s);
  }
  return r;
}
function ta(t) {
  switch (t) {
    case "Hourly":
      return "hour";
    case "Daily":
    case "Weekly":
      return "day";
    case "Monthly":
    case "Seasonal":
      return "month";
    case "Yearly":
      return "year";
    default:
      return;
  }
}
function hn(t, e) {
  const n = f.app;
  if (!n?.registerTemporalLayer) return;
  const r = t.dims.find((a) => a.isTemporal && a.count > 1);
  if (!r) {
    n.unregisterTemporalLayer?.(e);
    return;
  }
  const o = r.steps.map((a) => String(a).replace(" ", "T")), s = ta(t.temporalResolution);
  f.temporalDetach = n.registerTemporalLayer(e, { dimension: r.key, getTimeValues: () => o, setTime: (a) => {
    const c = Jo(r.steps, a);
    c < 0 || (f.selector[r.key] = c, Jt());
  }, ...s ? { granularity: s, displayUnits: [s] } : {} }, { bind: !0 });
}
let Se;
function je() {
  window.clearTimeout(Se), Se = window.setTimeout(() => {
    ea();
  }, 200);
}
async function ea() {
  const t = f.app, e = f.spec;
  if (!t?.addZarrLayer || !e) return;
  const n = t.getMap?.();
  if (f.nativeLayerId && n) {
    try {
      n.removeLayer(f.nativeLayerId);
    } catch {
    }
    t.unregisterExternalNativeLayer?.(f.nativeLayerId);
  }
  f.temporalDetach && (f.temporalDetach(), f.temporalDetach = null), f.nativeLayerId = await t.addZarrLayer(un(e), e.zarrHref, dn(e)), hn(e, f.nativeLayerId), mn(f.nativeLayerId);
}
async function na(t, e, n = () => !0) {
  const r = f.app, o = r?.getMap?.();
  if (!r || !o) return z("GeoLibre map is not available.", !0), !1;
  if (!r.addZarrLayer) return z("Climate datasets need GeoLibre 2.4 or later.", !0), !1;
  Et(), f.selector = {};
  for (const s of t.dims) f.selector[s.key] = s.index;
  return f.nativeLayerId = await r.addZarrLayer(un(t), t.zarrHref, dn(t)), n() ? (hn(t, f.nativeLayerId), mn(f.nativeLayerId), e && r.fitBounds && yn() && r.fitBounds(e), !0) : (Et(), !1);
}
function rt(t) {
  return `ocs-features-${t}`;
}
function pn(t, e) {
  return e.flatMap((n) => ["fill", "line", "circle"].map((r) => `${t}-${encodeURIComponent(n).replaceAll("%", "_")}-${r}`));
}
const lt = /* @__PURE__ */ new Map();
let ra = 0;
async function te(t) {
  const e = f.app;
  if (!e?.registerExternalNativeLayer) return z("This GeoLibre version cannot add vector layers from a plugin.", !0), !1;
  const n = ++ra;
  lt.set(t, n);
  const r = f.ocsUrl, o = () => lt.get(t) === n && f.ocsUrl === r;
  z(`Loading ${t}…`);
  try {
    const s = await ln(r, t), a = Ho(s, await Xo(s));
    return o() ? (lt.delete(t), bn(a), f.vectors.set(t, a), !f.spec && a.bbox && e.fitBounds && yn() && e.fitBounds(a.bbox), z(""), !0) : (z(""), !1);
  } catch (s) {
    return o() && (lt.delete(t), z(`Failed to load ${t}: ${s.message}`, !0)), !1;
  }
}
function bn(t, e = { ...t.style, fillOpacity: 0 }, n) {
  const r = f.app;
  if (!r?.registerExternalNativeLayer) return;
  const o = rt(t.id);
  r.registerExternalNativeLayer({ id: o, name: `OCS: ${t.title}`, type: "pmtiles", sourceId: o, source: { url: t.pmtilesHref, sourceLayers: t.sourceLayers, tileType: "vector", type: "vector" }, sourcePath: t.pmtilesHref, nativeLayerIds: pn(o, t.sourceLayers), style: { ...e }, ...n != null ? { opacity: n } : {}, metadata: { sourceKind: "pmtiles-url", sourceLayers: t.sourceLayers, tileType: "vector", pickable: !0, datasetId: t.id, ocsUrl: f.ocsUrl, pluginId: fn, ...t.attribution ? { attribution: t.attribution } : {} } });
}
function mn(t) {
  f.vectors.size === 0 || !t || Ko(t) && oa();
}
function oa() {
  for (const t of f.vectors.values()) {
    const e = aa(t), n = f.app?.listLayers?.().find((r) => r.id === rt(t.id))?.opacity;
    f.app?.unregisterExternalNativeLayer?.(rt(t.id)), bn(t, e, n);
  }
}
function aa(t) {
  const e = { ...t.style, fillOpacity: 0 }, n = f.app?.getMap?.(), [r, o] = pn(rt(t.id), t.sourceLayers);
  if (!n?.getPaintProperty || !r || !o) return e;
  const s = (u, p) => {
    try {
      return n.getLayer(u) ? n.getPaintProperty?.(u, p) : void 0;
    } catch {
      return;
    }
  }, a = s(r, "fill-color"), c = s(r, "fill-opacity"), l = s(o, "line-color"), i = s(o, "line-width");
  return typeof a == "string" && (e.fillColor = a), typeof c == "number" && (e.fillOpacity = c), typeof l == "string" && (e.strokeColor = l), typeof i == "number" && (e.strokeWidth = i), e;
}
function ie(t) {
  lt.delete(t), f.vectors.delete(t) && f.app?.unregisterExternalNativeLayer?.(rt(t));
}
function $e(t) {
  for (const e of [...f.vectors.keys()]) t.includes(e) || ie(e);
}
function gn() {
  lt.clear();
  for (const t of [...f.vectors.keys()]) ie(t);
}
function sa() {
  const t = f.app?.getMap?.()?.getBounds?.();
  if (!t) return null;
  const [[e, n], [r, o]] = t.toArray();
  return [e, n, r, o];
}
function ca(t, e) {
  return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1];
}
const la = 2.5;
function yn() {
  const t = f.instanceExtent;
  if (!t) return !0;
  const e = sa();
  if (!e || !ca(e, t.bbox)) return !0;
  const n = t.bbox[2] - t.bbox[0], r = t.bbox[3] - t.bbox[1];
  return n <= 0 || r <= 0 ? !1 : Math.min((e[2] - e[0]) / n, (e[3] - e[1]) / r) > la;
}
function ia(t, e) {
  for (const n of t.dims) {
    const r = e[n.key];
    typeof r == "number" && Number.isInteger(r) && r >= 0 && r < n.count && (n.index = r);
  }
}
function fa(t) {
  for (const e of t.dims) e.isTemporal && (e.index = 0);
}
let bt = 0;
async function ee(t, e) {
  if (!f.ocsUrl) return;
  const n = ++bt;
  z(`Loading ${t}…`);
  try {
    const r = await ln(f.ocsUrl, t);
    if (n !== bt) return;
    const o = Vo(r);
    e ? ia(o, e) : f.app?.registerTemporalLayer && fa(o);
    const s = r.extent?.spatial?.bbox?.[0] ?? null;
    if (f.datasetId = t, f.spec = o, f.style = { colormapName: o.colormapName, clim: o.clim, opacity: 1 }, !await na(o, s, () => n === bt)) return;
    kn(o), Cn(o), St(o), Mn(o), j?.datasetSection.classList.remove("ocs-hidden"), z("");
  } catch (r) {
    n === bt && z(`Failed to load ${t}: ${r.message}`, !0);
  }
}
function wn() {
  bt++, Et(), f.datasetId = null, f.spec = null, f.selector = {}, j?.datasetSection.classList.add("ocs-hidden"), j && (j.collectionSelect.value = "");
}
async function mt(t) {
  const e = t.trim();
  if (e !== f.ocsUrl && (gn(), wn()), f.ocsUrl = e, !f.ocsUrl) {
    z("Enter an Open Climate Service URL.", !0);
    return;
  }
  z("Connecting…");
  try {
    const [n, r] = await Promise.all([Zo(f.ocsUrl), Go(f.ocsUrl)]);
    f.collections = n, f.instanceExtent = r, vn(), _t(), r && f.app?.fitBounds && f.app.fitBounds(r.bbox);
    const o = r?.name ? `${r.name} — ` : "", s = n.filter((l) => l.kind === "raster").length, a = n.length - s, c = [`${s} datasets`, ...a ? [`${a} boundary layers`] : []];
    z(n.length ? `${o}${c.join(", ")}` : `${o}no published datasets`);
  } catch (n) {
    z(`Could not reach ${f.ocsUrl}/stac: ${n.message}`, !0);
  }
}
function vn() {
  if (!j) return;
  const t = j.collectionSelect;
  t.replaceChildren();
  const e = C("option", void 0, "Select a dataset…");
  e.value = "", t.appendChild(e);
  for (const n of f.collections.filter((r) => r.kind === "raster")) {
    const r = C("option", void 0, n.title);
    r.value = n.id, t.appendChild(r);
  }
  t.value = f.datasetId ?? "", t.disabled = !f.collections.some((n) => n.kind === "raster");
}
function _t() {
  if (!j) return;
  const t = j.vectors;
  t.replaceChildren();
  const e = f.collections.filter((n) => n.kind === "vector");
  if (t.classList.toggle("ocs-hidden", e.length === 0), e.length !== 0) {
    t.appendChild(C("span", "ocs-field-label", "Vector data"));
    for (const n of e) {
      const r = C("label", "ocs-check"), o = C("input");
      o.type = "checkbox", o.checked = f.vectors.has(n.id), o.addEventListener("change", () => {
        o.checked ? te(n.id).then((s) => {
          s || (o.checked = !1);
        }) : ie(n.id);
      }), r.appendChild(o), r.appendChild(C("span", void 0, n.title)), t.appendChild(r);
    }
  }
}
function kn(t) {
  if (!j) return;
  j.meta.replaceChildren();
  const e = (n, r) => {
    const o = C("div", "ocs-meta-row");
    return o.appendChild(C("span", "ocs-meta-label", n)), o.appendChild(C("span", "ocs-meta-value", r || "—")), o;
  };
  j.meta.appendChild(e("Variable", t.variable)), j.meta.appendChild(e("Units", t.units)), t.temporalResolution && j.meta.appendChild(e("Period type", t.temporalResolution)), j.meta.appendChild(e("CRS", t.crs)), t.source && j.meta.appendChild(e("Source", t.source));
}
function Wt(t, e) {
  const n = t.steps[e];
  return n == null ? String(e) : String(n);
}
function Cn(t) {
  if (!j) return;
  j.dims.replaceChildren();
  const e = t.dims.filter((n) => n.count > 1 && !(n.isTemporal && f.temporalDetach != null));
  j.dims.classList.toggle("ocs-hidden", e.length === 0);
  for (const n of e) {
    const r = C("div", "ocs-dim"), o = C("div", "ocs-dim-header");
    o.appendChild(C("span", "ocs-dim-label", n.label));
    const s = C("span", "ocs-dim-value", Wt(n, n.index));
    if (o.appendChild(s), r.appendChild(o), n.control === "slider") {
      const a = C("input", "ocs-slider");
      a.type = "range", a.min = "0", a.max = String(n.count - 1), a.step = "1", a.value = String(n.index);
      let c;
      a.addEventListener("input", () => {
        const l = Number(a.value);
        f.selector[n.key] = l, s.textContent = Wt(n, l), window.clearTimeout(c), c = window.setTimeout(Jt, 120);
      }), r.appendChild(a);
    } else {
      const a = C("select", "ocs-select");
      n.steps.forEach((c, l) => {
        const i = C("option", void 0, String(c));
        i.value = String(l), a.appendChild(i);
      }), a.value = String(n.index), a.addEventListener("change", () => {
        const c = Number(a.value);
        f.selector[n.key] = c, s.textContent = Wt(n, c), Jt();
      }), r.appendChild(a);
    }
    j.dims.appendChild(r);
  }
}
function St(t) {
  if (!j) return;
  j.legend.replaceChildren();
  const e = cn(f.style.colormapName), n = C("div", "ocs-legend-bar");
  n.style.background = `linear-gradient(to right, ${e.join(",")})`;
  const r = C("div", "ocs-legend-scale");
  r.appendChild(C("span", void 0, String(f.style.clim[0]))), r.appendChild(C("span", void 0, t.units || "")), r.appendChild(C("span", void 0, String(f.style.clim[1]))), j.legend.appendChild(n), j.legend.appendChild(r);
}
function Mn(t) {
  if (!j) return;
  const e = j.styleControls;
  e.replaceChildren();
  const n = C("div", "ocs-row");
  n.appendChild(C("label", "ocs-field-label", "Colormap"));
  const r = C("select", "ocs-select");
  for (const i of [f.style.colormapName, ...Fo.filter((u) => u !== f.style.colormapName)]) {
    const u = C("option", void 0, i);
    u.value = i, r.appendChild(u);
  }
  r.value = f.style.colormapName, r.addEventListener("change", () => {
    f.style.colormapName = r.value, je(), St(t);
  }), n.appendChild(r), e.appendChild(n);
  const o = C("div", "ocs-row");
  o.appendChild(C("label", "ocs-field-label", "Range (min / max)"));
  const s = C("div", "ocs-clim"), a = C("input", "ocs-input");
  a.type = "number", a.value = String(f.style.clim[0]);
  const c = C("input", "ocs-input");
  c.type = "number", c.value = String(f.style.clim[1]);
  const l = () => {
    const i = Number(a.value), u = Number(c.value);
    Number.isFinite(i) && Number.isFinite(u) && i < u && (f.style.clim = [i, u], je(), St(t));
  };
  a.addEventListener("change", l), c.addEventListener("change", l), s.appendChild(a), s.appendChild(c), o.appendChild(s), e.appendChild(o);
}
function ua(t) {
  t.replaceChildren();
  const e = C("div", "ocs-panel"), n = C("div", "ocs-row"), r = C("input", "ocs-input");
  r.type = "text", r.placeholder = "https://my-climate-service.org", r.value = f.ocsUrl, r.addEventListener("keydown", (k) => {
    k.key === "Enter" && mt(r.value);
  }), n.appendChild(C("label", "ocs-field-label", "Open Climate Service URL")), n.appendChild(r);
  const o = C("div", "ocs-actions");
  o.appendChild(Ee("Connect", () => {
    mt(r.value);
  }));
  const s = Ee("Try Nepal demo", () => {
    r.value = qt, mt(qt);
  });
  s.classList.add("ocs-btn-secondary"), s.title = qt, o.appendChild(s), n.appendChild(o), e.appendChild(n);
  const a = C("div", "ocs-status");
  e.appendChild(a);
  const c = C("select", "ocs-select");
  c.disabled = !0, c.setAttribute("aria-label", "Climate dataset"), c.addEventListener("change", () => {
    c.value ? ee(c.value) : wn();
  }), e.appendChild(c);
  const l = C("div", "ocs-dataset ocs-hidden"), i = C("div", "ocs-meta"), u = C("div", "ocs-dims ocs-hidden"), p = C("div", "ocs-legend"), b = C("div", "ocs-style");
  l.append(i, u, p, b), e.appendChild(l);
  const g = C("div", "ocs-vectors ocs-hidden");
  return e.appendChild(g), t.appendChild(e), j = { datasetSection: l, status: a, collectionSelect: c, meta: i, dims: u, legend: p, styleControls: b, vectors: g }, f.collections.length && (vn(), _t()), f.spec && (kn(f.spec), Cn(f.spec), St(f.spec), Mn(f.spec)), l.classList.toggle("ocs-hidden", f.spec == null), () => {
    j = null;
  };
}
let Xt;
const da = { id: fn, name: "Open Climate Service", version: "0.3.7", urlParameterNames: [Ne, Le, Ae], activate(t) {
  f.app = t, Xt = t.registerRightPanel?.({ id: Zt, title: "Open Climate Service", dock: "right-of-layers", defaultWidth: 320, render: (e) => ua(e) }), t.openRightPanel?.(Zt);
}, deactivate(t) {
  Et(), gn(), Xt?.(), Xt = void 0, t.unregisterRightPanel?.(Zt), j = null, f.app = void 0;
}, async handleUrlParameters(t, e) {
  f.app = t;
  const n = e.get(Ne), r = e.get(Le), o = (e.get(Ae) ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  if (n) {
    await mt(n), r && await ee(r), $e(o);
    for (const s of o) await te(s);
    _t();
  }
}, getProjectState() {
  return { ocsUrl: f.ocsUrl, datasetId: f.datasetId, selector: f.selector, features: [...f.vectors.keys()] };
}, applyProjectState(t, e) {
  f.app = t;
  const n = e ?? {};
  if (typeof n.ocsUrl == "string" && n.ocsUrl) {
    const r = n.selector && typeof n.selector == "object" ? n.selector : void 0, o = Array.isArray(n.features) ? n.features.filter((s) => typeof s == "string") : [];
    mt(n.ocsUrl).then(async () => {
      n.datasetId && await ee(n.datasetId, r), $e(o);
      for (const s of o) await te(s);
      _t();
    });
  }
} };
export {
  da as default,
  da as plugin
};
//# sourceMappingURL=index.js.map
