import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/core";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import toErrorMap from "../utils/toErrorMap";
import { useRouter } from "next/router";

interface RegisterProps {}

interface RegisterData {
  username: string;
  password: string;
}

const Register: React.FC<RegisterProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();

  const onFormSubmit = async (values: RegisterData, { setErrors }: any) => {
    const response = await register(values);
    if (response.data?.register.errors) {
      setErrors(toErrorMap(response.data.register.errors));
    } else if (response.data?.register.user) {
      router.push("/");
    }
  };

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onFormSubmit}
      >
        {({ isSubmitting }: { isSubmitting: boolean }) => (
          <Form>
            <InputField
              name="username"
              placeholder="Your username"
              label="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="*****"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
