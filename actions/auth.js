import { auth } from "../lib/firebase";

export const signin = async (formData, loading) => {
  console.log("i was called ");

  try {
    await auth.createUserWithEmailAndPassword(formData.email, formData.pass);
    console.log("====================================");
    console.log("created ");
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};
