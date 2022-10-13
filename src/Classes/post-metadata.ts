import { Time } from "@angular/common"

export class Post_Metadata {
    keymail:any
    name:any
    caption:any
    post_url!:String    
    post:any
    fileType:any
    username:any
    
    // date!:Date
    // time!:Time

    constructor(post:File) {
        this.post = post
    }

}    
    