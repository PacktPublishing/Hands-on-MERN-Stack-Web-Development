import store from 'store2';

export default async () => ({
  authorization: `Bearer ${await store.get('authToken')}`,
});
