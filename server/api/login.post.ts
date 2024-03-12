function login(mail: string, pass: string) {
  return { email: mail, password: pass };
}

export default defineEventHandler(async (event) => {
  const { mail, pass } = await readBody(event);
  const token = login(mail, pass);
  console.log(token);
  return { data: token };
});
