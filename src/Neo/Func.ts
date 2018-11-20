export function copyArray<T>(
    src: ArrayLike<T>,
    srcOffset: number,
    dst: ArrayLike<T>,
    dstOffset: number,
    count: number
): any {
    for (let i = 0; i < count; i++)
        (<any>dst)[i + dstOffset] = src[i + srcOffset];
}

export function fromArray<T>(
    arr: ArrayLike<T>
): Array<T> {
      let array = new Array<T>(arr.length);
      for (let i = 0; i < array.length; i++) array[i] = arr[i];
      return array;
};

export function fromArrayBuffer(
    buffer: ArrayBuffer | ArrayBufferView
): Uint8Array {
    if (buffer instanceof Uint8Array) return buffer;
    else if (buffer instanceof ArrayBuffer) return new Uint8Array(buffer);
    else {
        let view = buffer as ArrayBufferView;
        return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
    }
};

export function hexToBytes(astr: string): Uint8Array {
    if ((astr.length & 1) != 0) throw new RangeError();
    var str = astr;
    if (astr.length >= 2 && astr[0] == "0" && astr[1] == "x")
        str = astr.substr(2);
    let bytes = new Uint8Array(str.length / 2);
    for (let i = 0; i < bytes.length; i++) {
            bytes[i] = parseInt(str.substr(i * 2, 2), 16);
    }
    return bytes;
};

export function slice(arrbuf: ArrayBuffer, begin: number, end = arrbuf.byteLength): ArrayBuffer {
    if (begin < 0) begin += arrbuf.byteLength;
    if (begin < 0) begin = 0;
    if (end < 0) end += arrbuf.byteLength;
    if (end > arrbuf.byteLength) end = arrbuf.byteLength;
    let length = end - begin;
    if (length < 0) length = 0;
    let src = new Uint8Array(arrbuf);
    let dst = new Uint8Array(length);
    for (let i = 0; i < length; i++) dst[i] = src[i + begin];
    return dst.buffer;
};

export function toHexString(str: any): string {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    s += (str[i] >>> 4).toString(16);
    s += (str[i] & 0xf).toString(16);
  }
  return s;
};

export function clone(arr: Uint8Array): Uint8Array {
    var u8 = new Uint8Array(arr.length);
    for (let i = 0; i < arr.length; i++) u8[i] = arr[i];
    return u8;
};

export function concat(data1, data2) {
  var newarr = new Uint8Array(data1.length + data2.length);
  for (var i = 0; i < data1.length; i++) {
    newarr[i] = data1[i];
  }
  for (var i = 0; i < data2.length; i++) {
    newarr[data1.length + i] = data2[i];
  }
  return newarr;
};


