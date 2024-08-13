import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation } from "./userApi";

const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const nav = useNavigate();
  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (val) => {
      try {
        const response = await loginUser(val).unwrap();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    validationSchema: loginSchema
  });

  return (
    <div className="p-4 w-80 max-w-screen-lg sm:w-96">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>

        <form className="mt-5 mb-2 " onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
              onChange={handleChange}
              size="lg"
              value={values.email}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.email && touched.email && <h1 className='text-red-600'>{errors.email}</h1>}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            {errors.password && touched.password && <h1 className='text-red-600'>{errors.password}</h1>}
          </div>

          <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account ?{" "}
            <button type="button" onClick={() => nav('/register')} className="font-medium text-gray-900"> Sign Up</button>

          </Typography>
        </form>
      </Card>
    </div>
  );
}


export default Login