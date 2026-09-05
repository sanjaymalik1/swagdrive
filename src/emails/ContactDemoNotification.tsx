import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type ContactDemoNotificationProps = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactDemoNotification({
  fullName,
  companyName,
  email,
  phone,
  message,
}: ContactDemoNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>
        New demo request from {fullName} at {companyName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Book a Demo request</Heading>
          <Text style={paragraph}>
            Someone submitted the contact form on SwagDrive.
          </Text>
          <Hr style={hr} />
          <Section>
            <Text style={label}>Name</Text>
            <Text style={value}>{fullName}</Text>
            <Text style={label}>Company</Text>
            <Text style={value}>{companyName}</Text>
            <Text style={label}>Work email</Text>
            <Text style={value}>{email}</Text>
            <Text style={label}>Phone</Text>
            <Text style={value}>{phone}</Text>
            <Text style={label}>How can we help?</Text>
            <Text style={value}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f4f6f8",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "32px",
  borderRadius: "12px",
  maxWidth: "560px",
};

const heading = {
  color: "#04326e",
  fontSize: "22px",
  fontWeight: "700" as const,
  margin: "0 0 12px",
};

const paragraph = {
  color: "#5a6b7a",
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "0 0 16px",
};

const hr = {
  borderColor: "#e8eef3",
  margin: "16px 0 24px",
};

const label = {
  color: "#5a6b7a",
  fontSize: "12px",
  fontWeight: "600" as const,
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  margin: "0 0 4px",
};

const value = {
  color: "#04326e",
  fontSize: "15px",
  lineHeight: "1.5",
  margin: "0 0 16px",
  whiteSpace: "pre-wrap" as const,
};
