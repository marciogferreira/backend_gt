const Connection = require('../config/Connection')

require('../models/UserTypesModel');
require('../models/UserModel');
require('../models/ProfileModel');
require('../models/PostModel');
require('../models/TagModel');
require('../models/PostTagModel');
require('../models/CommentModel');

Connection.sync({ force: false });