export type User = {
  id: string;
  name: string;
};

export async function getUser(): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log('Get Usre !!');
  return {
    id: 'NFfdho18EJhi8fnkHFdsFDSJh0',
    name: 'ハードコーディングユーザ',
  };
}
