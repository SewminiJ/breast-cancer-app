import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../config/firebase/firebaseConfig';

export default function useFetchTodos() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        if (currentUser) {
          const userId = currentUser.uid;
          const userRef = doc(db, 'users', userId);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUsers(userSnap.data());
          } else {
            // Create the user document if it doesn't exist
            await setDoc(userRef, { users: [] });
            setUsers({ users: [] });
          }
        } else {
          setUsers({});
        }
      } catch (err) {
        setError('Failed to load users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentUser]);

  return { loading, error, users, setUsers };
}
