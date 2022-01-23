const qwerty = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

export const randomElements = <T>(arr: T[], length = 5): T[] => {
  return new Array(length)
    .fill(0)
    .map(() => arr[Math.ceil(Math.random() * (qwerty.length - 1))]);
};

export const randomString = (length = 5): string => {
  return new Array(length)
    .fill(0)
    .map(() => qwerty[Math.ceil(Math.random() * (qwerty.length - 1))])
    .join('');
};
