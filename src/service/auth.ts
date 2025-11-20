import api from "../services/api"

export const login = async (username: string, password: string) => {
  const res = await api.post("/auth/login", { email: username, password })

  return res.data
}

export const register = async (
  username: string,
  password: string,
  firstname?: string,
  lastname?: string,
) => {
  const payload: any = { email: username, password }
  if (firstname) payload.firstname = firstname
  if (lastname) payload.lastname = lastname

  console.log('register payload ->', payload)
  const res = await api.post("/auth/register", payload)
  console.log('register response ->', res?.data)

  return res.data
}

export const getMyDetails = async () => {
  const res = await api.get("/auth/me")

  return res.data
}
export const refreshTokens = async (refreshToken: string) => {
  const res = await api.post("/auth/refresh-token", {  token : refreshToken })
    return res.data
}