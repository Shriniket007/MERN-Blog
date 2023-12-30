const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;

// changes

// PS C:\shriniket\github test\MERN-Blog> git remote -v
// origin  https://github.com/shriniket1234/MERN-Blog.git (fetch)
// origin  https://github.com/shriniket1234/MERN-Blog.git (push)
// PS C:\shriniket\github test\MERN-Blog> git remote add upstream https://github.com/Shriniket007/MERN-Blog.git
// PS C:\shriniket\github test\MERN-Blog> git remote -v
// origin  https://github.com/shriniket1234/MERN-Blog.git (fetch)
// origin  https://github.com/shriniket1234/MERN-Blog.git (push)
// upstream        https://github.com/Shriniket007/MERN-Blog.git (fetch)
// upstream        https://github.com/Shriniket007/MERN-Blog.git (push)
// PS C:\shriniket\github test\MERN-Blog> git fetch upstream
// From https://github.com/Shriniket007/MERN-Blog
//  * [new branch]      main       -> upstream/main
// PS C:\shriniket\github test\MERN-Blog> git checkout main
// Already on 'main'
// M       api/index.js
// Your branch is ahead of 'origin/main' by 1 commit.
//   (use "git push" to publish your local commits)
// PS C:\shriniket\github test\MERN-Blog> git merge upstream/main
// Already up to date.
// PS C:\shriniket\github test\MERN-Blog> git diff
// diff --git a/api/index.js b/api/index.js
// index 76b535b..d782bcf 100644
// --- a/api/index.js
// +++ b/api/index.js
// @@ -14,7 +14,7 @@ require("dotenv").config();
//  const PORT = process.env.PORT || 4000;

//  // hello changes
// -
// +// hello hello
//  const salt = bcrypt.genSaltSync(10);
//  const secret = process.env.JWT_SECRET || "defaultSecret"; // Use a default secret if not provided in the environment

// diff --git a/api/models/Post.js b/api/models/Post.js
// index 7bbba14..3ecd25f 100644
// --- a/api/models/Post.js
// +++ b/api/models/Post.js
// @@ -1,16 +1,21 @@
// -const mongoose = require('mongoose');
// -const {Schema,model} = mongoose;
// +const mongoose = require("mongoose");
// +const { Schema, model } = mongoose;

// -const PostSchema = new Schema({
// -  title:String,
// -  summary:String,
// -  content:String,
// -  cover:String,
// -  author:{type:Schema.Types.ObjectId, ref:'User'},
// -}, {
// -  timestamps: true,
// -});
// +const PostSchema = new Schema(
// +  {
// +    title: String,
// +    summary: String,
// +    content: String,
// +    cover: String,
// +    author: { type: Schema.Types.ObjectId, ref: "User" },
// +  },
// +  {
// +    timestamps: true,
// +  }
// +);

// -const PostModel = model('Post', PostSchema);
// +const PostModel = model("Post", PostSchema);

// -module.exports = PostModel;
// \ No newline at end of file
// +module.exports = PostModel;
// +
// +// changes
// (END)
