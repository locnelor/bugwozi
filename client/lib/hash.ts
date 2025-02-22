
/**
 * 将 ArrayBuffer 转换为 SHA-256 哈希字符串
 *
 * @param buffer ArrayBuffer 类型的输入数据
 * @returns 返回一个包含 SHA-256 哈希值的十六进制字符串
 */
export const arrayBufferToSHA256 = async (buffer: ArrayBuffer) => {
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

/**
 * 将 ArrayBuffer 转换为 MD5 字符串
 *
 * @param buffer ArrayBuffer 对象
 * @returns MD5 字符串
 */
export const arrayBufferToMd5 = async (buffer: ArrayBuffer) => {
  const hashBuffer = await crypto.subtle.digest('MD5', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};


/**
 * 将字符串转换为 ArrayBuffer 对象
 *
 * @param str 需要转换的字符串
 * @returns 转换后的 ArrayBuffer 对象
 */
export const stringToArrayBuffer = (str: string) => {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}