export const hasNumber = function (str: string) {
  return /\d/.test(str);
};

export const replaceAllTags = function (str: string) {
  return str.replace(/<\/?[^>]+(>|$)/g, '').replace(/\s+/g, ' ');
};
