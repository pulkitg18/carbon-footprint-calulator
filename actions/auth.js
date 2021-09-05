import API from "../api/axios";
import { auth } from "../lib/firebase";

export const signin = async (formData, setLoading, setUser) => {
  try {
    await auth.createUserWithEmailAndPassword(formData.email, formData.pass);
    await API.post("/user", {
      name: formData.name,
      email: formData.email.toLowerCase(),
    });
    setUser({
      name: formData.name,
      email: formData.email.toLowerCase(),
      score: 0,
    });
    setLoading(false);
    return;
  } catch (error) {
    setLoading(false);
    return error;
  }
};
