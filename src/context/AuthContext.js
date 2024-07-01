import React, { useContext, useState, useEffect } from "react";
//firebase auth
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
//firestore
import db from "../firebase";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function handlePMNew(currentOutput, date, planOutput) {
    const serverTime = serverTimestamp();
    const collectionRef = collection(db, "productionData");
    const payload = { currentOutput, date, planOutput, serverTime }; //如果欄位名稱與變數相同就可以省略，否則必須宣告。如:name:colorname
    const docRef = addDoc(collectionRef, payload);

    return docRef;
  }

  function handlePMEdit(id, currentOutput, date, planOutput) {
    const serverTime = serverTimestamp();
    const docRef = doc(db, "productionData", id);
    const payload = { currentOutput, date, planOutput, serverTime }; //更新資料會移到最上方
    return updateDoc(docRef, payload); //updateDoc只會更新有變動的表格，其他的值不會被覆蓋
  }

  function handlePMDel(id) {
    const docRef = doc(db, "productionData", id);
    return deleteDoc(docRef), alert("資料刪除中...");
  }

  function handleFMNew(totalEqpt, date, runEqpt, idleEqpt, faultEqpt) {
    const serverTime = serverTimestamp();
    const collectionRef = collection(db, "equipmentLog");
    const payload = {
      totalEqpt,
      date,
      runEqpt,
      idleEqpt,
      faultEqpt,
      serverTime,
    };
    const docRef = addDoc(collectionRef, payload);
    return docRef;
  }

  function handleFMEdit(id, totalEqpt, date, runEqpt, idleEqpt, faultEqpt) {
    const serverTime = serverTimestamp();
    const docRef = doc(db, "equipmentLog", id);
    const payload = {
      totalEqpt,
      date,
      runEqpt,
      idleEqpt,
      faultEqpt,
      serverTime,
    };
    return updateDoc(docRef, payload);
  }

  function handleFMDel(id) {
    const docRef = doc(db, "equipmentLog", id);
    return deleteDoc(docRef), alert("資料刪除中...");
  }

  function handleMMNew(applicant, date, notes, serialNum) {
    const serverTime = serverTimestamp();
    const collectionRef = collection(db, "maintenanceLog");
    const payload = {
      applicant,
      date,
      notes,
      serialNum,
      serverTime,
    };
    const docRef = addDoc(collectionRef, payload);
    return docRef;
  }

  function handleMMEdit(id, applicant, date, notes, serialNum) {
    const serverTime = serverTimestamp();
    const docRef = doc(db, "maintenanceLog", id);
    const payload = {
      applicant,
      date,
      notes,
      serialNum,
      serverTime,
    };
    return updateDoc(docRef, payload); //updateDoc只會更新有變動的表格，其他的值不會被覆蓋
  }

  function handleMMDel(id) {
    const docRef = doc(db, "maintenanceLog", id);

    return deleteDoc(docRef), alert("資料刪除中...");
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    handlePMNew,
    handlePMEdit,
    handlePMDel,
    handleFMNew,
    handleFMEdit,
    handleFMDel,
    handleMMNew,
    handleMMEdit,
    handleMMDel,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
