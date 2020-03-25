export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Get Usre !!');
}
