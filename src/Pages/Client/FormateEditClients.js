import ClientInialValue from "./ClientInialValue";

export const FormateEditClients = (editClientData) => {
  const {
    clientname,
    companyName,
    email,
    linkdinProfile,
    location,
    website,
    clientcomments,
    clientlinkedin,
    priority,
    phone,
  } = editClientData;

  const editClientValues = {
    ...ClientInialValue,

    clientname,
    companyName,
    email,
    linkdinProfile,
    location,
    website,
    clientcomments,
    clientlinkedin,
    priority: `${priority}`,
    phone,
  };
  return editClientValues;
};
