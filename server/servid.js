require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConnect");
const movieRoutes = require("./routes/books");
const cors = require("cors");
const path= require('path');
const app = express();
const axios = require("axios");
dbConnect();
            
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// app.get('/download/:language/:bookId', (req, res) => {
//     const { language, bookId } = req.params;
//     console.log('Request received:', { language, bookId });

//     // Assuming your filename is like 'en_64c4d9e128e4ff82b16fbc40.pdf'
//     const pdfFileName = `${language}_${bookId}.pdf`;
//     const pdfPath = path.join(__dirname, 'copies', pdfFileName);

//     console.log('Attempting to access file:', pdfPath);

//     res.sendFile(pdfPath, (err) => {
//         if (err) {
//             console.error('Error sending file:', err);
//             res.status(404).send('File not found');
//         }
//     });
// })


// app.use(express.json());                                                                                                                                                

// app.use("/studs", movieRoutes);

// const port = process.env.PORT || 4000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get('/download/:language/:bookId', async (req, res) => {
    const { language, bookId } = req.params;
    console.log('Request received:', { language, bookId });

    const fileName = `${language}_${bookId}.pdf`;

    let fileIds;
    try {
        fileIds = JSON.parse(process.env.DRIVE_FILE_IDS);
        console.log(fileIds);
        
    } catch (error) {
        console.error('Error parsing DRIVE_FILE_IDS:', error);
        return res.status(500).send('Internal server error');
    }

    const fileId = fileIds[fileName];
    if (!fileId) {
        console.error(`File ID not found for: ${fileName}`);
        return res.status(404).send('File not found');
    }

    // const driveUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const driveUrl = `https://drive.usercontent.google.com/u/0/uc?id=${fileId}&export=download`;

    try {
        const response = await axios.get(driveUrl, { responseType: 'arraybuffer' });
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        console.log('Parsed file IDs:', fileIds);
        console.log('Constructed file name:', fileName);
        res.setHeader('Content-Type', 'application/pdf');
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching file from Google Drive:', error);
        res.status(500).send('Error fetching file from Google Drive');
    }
});



app.use(express.json());

app.use("/studs", movieRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
