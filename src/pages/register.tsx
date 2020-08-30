import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/core";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";

interface RegisterProps {}

interface RegisterData {
  username: string;
  password: string;
}

const Register: React.FC<RegisterProps> = ({}) => {
  const onFormSubmit = (values: RegisterData) => {
    console.log(values);
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
