interface TechsObjects {
  title: string;
  experience: number;
}

interface CreateUserTs {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechsObjects>
}

export default function createUser({ name, email, password }:CreateUserTs) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}