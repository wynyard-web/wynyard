import { Router } from '@angular/router';
import { UserDataService } from './../../Services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { getStorage, ref, deleteObject, getDownloadURL } from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ud:UserDataService, private router:Router) { }

  ngOnInit(): void {
    this.fetch_wynyard()
  }

  auth = getAuth();
  logout()
  {
    //this.ud.set_logout();
    signOut(this.auth).then(() => {
      // Sign-out successful.
      window.location.reload()
    }).catch((error) => {
      // An error happened.
      alert("Error logging out.")
    });
  }

  wynyard = ""

  fetch_wynyard() {
    const firebase_storage = getStorage()

    getDownloadURL(ref(firebase_storage, "assets/" + "wynyard.png"))
  .then((url) => {
    //console.log(url)
    this.wynyard = url
    //console.log(this.profile_pic_url)

  })
  .catch((error) => {
    // Handle any errors
    console.log("Error while loading wynyard logo:", error)
  });
  }
}
