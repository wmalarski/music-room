const qwerty = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

export const randomString = (length = 5): string => {
  return new Array(length)
    .fill(0)
    .map(() => qwerty[Math.ceil(Math.random() * (qwerty.length - 1))])
    .join('');
};
