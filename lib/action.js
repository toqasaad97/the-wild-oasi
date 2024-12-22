"use sever"

import { signIn } from "./auth"

export async function signInAction() {
await signIn("google",{
  redirectTo:"/account"
})
}