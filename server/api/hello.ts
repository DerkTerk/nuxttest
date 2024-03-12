export default defineEventHandler((event) => {
  console.log("hello");
  return {
    hello: "world",
  };
});
