import { Time } from "@angular/common"

export class Post_Metadata {
    keymail:any
    name:any
    post_url:any
    //size:any
    post:any
    fileType:any
    // date!:Date
    // time!:Time

    constructor(post:File) {
        this.post = post
    }

}    
    