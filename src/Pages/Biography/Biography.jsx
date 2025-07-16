import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import data from "../../assets/data/evolution.json";

const acent = {
  color: "#4DA6FF",
  fontSize: "35px",
  fontWeight: 600,
  fontFamily: "Rajdhani, sans-serif",
  fontStyle: "normal",
  paddingTop: "50px",
  paddingBottom: "30px",
  paddingLeft: "50px",
};

export default function Biography() {
  return (
    <Box
      className="name"
      sx={{
        px: { sm: 1, md: 12.5 },
        paddingBottom: "100px",
        position: "relative",
        color: "#f2f2f2",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          marginTop: "200px",
          paddingLeft: "50px",
          fontSize: { xs: "3.5rem", sm: "4rem", md: "5rem" },
          fontFamily: "Bebas Neue, sans-serif",
          letterSpacing: "5%"
        }}
      >
        BIOGRAFIJA{" "}
        <Box
          component="span"
          sx={{
            color: "#4DA6FF",
            paddingLeft: "1%",
            fontSize: {xs: "1.2rem", sm: "1.8rem", md: "3rem" },
          }}
        >
          Uroš Brkić
        </Box>
      </Typography>

      <Box
        sx={{
          lineHeight: 1.8,
          color: "#f2f2f2",
          borderTop: "2px solid #4DA6FF",
          paddingTop: "80px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 40px 30px",
            textAlign: "justify",
          }}
        >
          Uroš Brkić je profesionalni automobilista iz Srbije čija ljubav prema
          vožnji i auto-moto sportu potiče iz najranijeg detinjstva. Još kao
          trogodišnjak vozio je baterijski džip ispred kuće bake i deke na
          Konjarniku, dok je njegov otac Čeda na istom parkingu pripremao
          trkačkog Juga. Dok su se brat Miloš i Uroš igrali oko alata i
          automobila, niko nije slutio da će upravo trke oblikovati njegov
          život.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 40px 30px",
            textAlign: "justify",
          }}
        >
          Prvi pravi kontakt s trkačkim kartingom imao je sa nepunih pet godina,
          za volanom bratovog Zastavinog DMB kartinga. Na improvizovanoj stazi
          pored Plavog mosta doživeo je i svoje prvo izletanje – papučica gasa
          ostala je zaglavljena, a on se u poslednjem trenutku spasao okretanjem
          kartinga. „Još si mali – čak i za najmanji karting“, zaključio je
          otac, dok su mami tvrdili da je proba prošla savršeno.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 40px 30px",
            textAlign: "justify",
          }}
        >
          Iako je dugo tvrdio da neće voziti trke, Uroš je već sa šest godina
          naučio da vozi automobil, a ubrzo i motor. Detinjstvo je proveo na
          skuterima i motociklima, a kada je brat počeo da se takmiči u Jugu, u
          njemu se, kako kaže, „probudio benzinski virus“.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 40px 30px",
            textAlign: "justify",
          }}
        >
          Prekretnica se dogodila sa 15 godina, kada je počeo da trenira na
          stazi Karting centra Floyd – prvog zatvorenog karting centra u Srbiji.
          Ubrzo je počeo da postiže ozbiljna vremena, obara rekorde i pokazuje
          prirodan trkački instinkt. Floyd je tada bio mesto okupljanja domaćih
          šampiona, a za Uroša – početak profesionalnog puta.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 40px 30px",
            textAlign: "justify",
          }}
        >
          Njegova karijera razvila se iz porodične tradicije, ali je izgrađena
          na ličnoj posvećenosti, strpljenju i istinskoj strasti prema trkama.
        </Typography>

        <Typography variant="h3" style={acent} sx={{ marginTop: "60px" }}>
          TRKAČKA KARIJERA
        </Typography>
        <Grid container spacing={3} sx={{ padding: "30px 20px 100px 20px" }}>
          {data.map((item) => (
            <Grid
            key={item.id || item.title || index}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                minHeight: "100px",
                padding: "25px 30px 30px 30px",
                background:
                    "linear-gradient(100deg, rgba(42, 40, 40, 0.8), rgba(56, 56, 56, 0.8))",
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
                  borderRadius: "5px",
              }}
            >
              <Typography
                variant="body1"

              sx={{color: "#4DA6FF",
  fontSize: "24px",
  fontWeight: 600,
  fontFamily: "Rajdhani, sans-serif",
  fontStyle: "normal",}}>
                  {item.title} {item.add}
                </Typography>
              <Typography>
                {item.text}
                
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h3" style={acent}>
          PORODIČNA TRADICIJA
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 40px 30px",
            textAlign: "justify",
          }}
        >
          Uroš Brkić potiče iz trkačke porodice koja je već više od četiri
          decenije prisutna na stazama – kroz tri generacije. Porodica Brkić
          osvojila je više od 50 šampionskih titula, čime je ostavila snažan
          trag u istoriji domaćeg automobilizma.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 100px 30px",
            textAlign: "justify",
          }}
        >
          Njegov otac, Čedomir Brkić, 24 puta je bio šampion velike i male
          Jugoslavije, Srbije i Crne Gore, kao i Republike Srbije. Stariji brat,
          Miloš Brkić, desetostruki je šampion Srbije. Upravo od njih Uroš
          svakodnevno uči – kako kroz razgovore, tako i iz svake pređene
          krivine.{" "}
        </Typography>
        <Typography variant="h3" style={acent}>
          ZAVRŠNA REČ
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 40px 30px",
            textAlign: "justify",
          }}
        >
          Karijera Uroša Brkića predstavlja spoj porodične tradicije, ljubavi
          prema brzini i neumornog rada. Od plastičnog džipa na Konjarniku do
          prototipova na evropskim trkačkim stazama – svaki krug doprineo je
          njegovom razvoju, ne samo kao vozača, već i kao čoveka.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: "1.5",
            padding: "0px 30px 180px 30px",
            textAlign: "justify",
          }}
        >
          Danas je u punom takmičarskom ritmu, ali nikada ne zaboravlja gde je
          sve počelo. Za Uroša, vožnja nije samo sport – to je način života.{" "}
        </Typography>
      </Box>
    </Box>
  );
}
