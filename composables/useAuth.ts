import { ISession } from "~/types/ISession";

export async function registerWhithEmail(
  username: string,
  name: string,
  email: string,
  password: string
) {
  try {
    const res = await $fetch<ISession>("/api/auth/register", {
      method: "POST",
      body: { username, name, email, password },
    });
    if (res) {
      useState("user").value = res;
      await useRouter().push("/dashboard");
    }
  } catch (error: any) {
    console.error("error: " + error.toString());
  }
}
