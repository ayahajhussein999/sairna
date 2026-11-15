import { useMutation } from "@tanstack/react-query";
import {
  loginUser,
  registerUser,
} from "../services/website-service";

export default function useAuth() {
  const loginMutation = useMutation({
    mutationFn: loginUser,
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,
  });

  return {
    loginMutation,
    registerMutation,
  };
}