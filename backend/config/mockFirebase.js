/**
 * Temporary in-memory mock Firestore for API testing
 * Simulates Firebase Firestore collection operations
 */

let store = [];
let nextId = 1;

const mockFirestore = {
  collection: (name) => ({
    add: async (data) => {
      const doc = { id: String(nextId++), ...data };
      store.push(doc);
      return { id: doc.id };
    },
    orderBy: (field, direction) => ({
      limit: (n) => ({
        get: async () => {
          const sorted = [...store].sort((a, b) => {
            if (direction === 'desc') {
              return new Date(b[field]) - new Date(a[field]);
            }
            return new Date(a[field]) - new Date(b[field]);
          });
          const limited = sorted.slice(0, n);
          return {
            empty: limited.length === 0,
            docs: limited.map(doc => ({
              id: doc.id,
              data: () => doc
            }))
          };
        }
      }),
      get: async () => {
        const sorted = [...store].sort((a, b) => {
          if (direction === 'desc') {
            return new Date(b[field]) - new Date(a[field]);
          }
          return new Date(a[field]) - new Date(b[field]);
        });
        return {
          empty: sorted.length === 0,
          docs: sorted.map(doc => ({
            id: doc.id,
            data: () => doc
          }))
        };
      }
    })
  })
};

module.exports = { db: mockFirestore };
