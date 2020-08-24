import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export default function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'asdad@.com.br',
    password: '123123',
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
      "TypeScript",
      { title: 'titulo', experience: 100},
    ],
  });

  return response.json(user);
}

