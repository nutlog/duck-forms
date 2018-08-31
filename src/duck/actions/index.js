export const change = (form, field, value) => ({
  type: 'DUCK_CHANGE',
  payload: { form, field, value },
});

export const registerField = (form, field) => ({
  type: 'DUCK_REGISTER',
  payload: { form, field },
});