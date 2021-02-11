const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//Database config
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ramon742:zxc123@personalprojects.hhiuu.mongodb.net/to-do?retryWrites=true&w=majority', {
            useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
        });

        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err);
		// Exit process with failure
		process.exit(1);
    }
};

connectDB();

// Define Routes
app.use('/api/to-do', require('./routes/to-do'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


