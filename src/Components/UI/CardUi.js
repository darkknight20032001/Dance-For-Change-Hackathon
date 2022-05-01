import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function CardUi({ head, content, imgSrc, clickHandler }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "#333333",
        color: "white",
        boxShadow: "5px 0px 13px black",
      }}
      className="cardui"
      onClick={clickHandler}
    >
      <CardActionArea>
        <CardMedia component="img" height="247px" image={imgSrc} alt={head} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: `'Libre Bodoni', serif` }}
          >
            {head}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "white", fontFamily: `'Playfair Display', serif` }}
          >
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
