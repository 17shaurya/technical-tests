export const users = (USER: any) => {
  const res = fetch(`https://api.github.com/search/users?q=${USER}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });

  return res;
};
