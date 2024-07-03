"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Input,
} from "@nextui-org/react";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function RegistrationForm() {
  return (
    <Card className="max-w-[400px] px-8">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Register</p>
          <p className="text-small text-default-500">
            register your pharmacy here
          </p>
        </div>
      </CardHeader>
      <Divider className="hidden sm:visible" />
      <CardBody>
        <form>
          <div className="mb-3">
            <Input type="text" label="Pharmacy Name" isRequired />
          </div>
          <div className="mb-5 flex flex-col gap-3">
            <Input
              type="text"
              label="Address 1"
              name="addressLine1"
              isRequired
            />
            <Input type="text" label="Address 2" name="addressLine2" />
            <Input type="text" label="City" name="city" isRequired />
            <Input type="text" label="District" name="district" isRequired />
          </div>
          <Divider />
          <div className="flex flex-col gap-3 my-3">
            <p className="text-center uppercase">Or</p>
            <Link
              href={"/location"}
              className="w-full flex justify-center"
            >
              <Button color="success" variant="bordered">
                Get live location
                <DrawingPinFilledIcon />
              </Button>
            </Link>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default RegistrationForm;
