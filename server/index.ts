import express from 'express';

const port = process.env.PORT || 3200;

const app = express();

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    });

    //route
    app.get('/', (req, res) => {
        res.send('Hello World');
    }   );
