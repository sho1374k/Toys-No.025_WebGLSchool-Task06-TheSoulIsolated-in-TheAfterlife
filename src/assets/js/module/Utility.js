export class Utility {
  /**
   * @param {string} hex // 16進数の色
   * @returns [r, g, b]の配列データ
   */
  static hex2rgb(hex) {
    if (hex.slice(0, 1) === "#") hex = hex.slice(1);
    if (hex.length === 3)
      hex =
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(1, 2) +
        hex.slice(1, 2) +
        hex.slice(2, 3) +
        hex.slice(2, 3);

    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function (
      str
    ) {
      return parseInt(str, 16);
    });
  }

  /**
   * @param {array} rgb // hex2rgbから得られた配列[r, g, b]とする
   * @returns vec3
   */
  static rgbToGLSLColor(rgb) {
    const [r, g, b] = rgb;
    return [r / 255.0, g / 255.0, b / 255.0];
  }

  /**
   * GLSLカラーから16進数の色に変換する
   * @param {array} rgb
   * @returns
   */
  static glslColorToHex(rgb) {
    // RGB成分を0から255の範囲に戻すため、255を掛けて四捨五入します
    const r = Math.round(rgb[0] * 255);
    const g = Math.round(rgb[1] * 255);
    const b = Math.round(rgb[2] * 255);

    // それぞれの成分を16進数に変換し、2桁になるように0を追加します
    const rHex = r.toString(16).padStart(2, "0");
    const gHex = g.toString(16).padStart(2, "0");
    const bHex = b.toString(16).padStart(2, "0");

    // 最終的なhexカラーコードを生成して返します
    return `#${rHex}${gHex}${bHex}`;
  }

  /**
   * 範囲ランダム数値生成
   * @param {number} min // 最小値
   * @param {number} max // 最大値
   * @returns
   */
  static getClampRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}
