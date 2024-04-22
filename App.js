import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CityCard from "./components/CityCard";
import { cityImages } from "./utils/constants";

const Stack = createStackNavigator();

const cityContent = {
  munich:
    "Founded as a Roman city, in the Middle Ages Munich became the capital of the County of Munich. After joining with the Kingdom of Bavaria to form the confederation of the Crown of Bavaria, Munich, which continued to be the capital of the Principality of Bavaria, became the most important city in the Crown of Bavaria and the main economic and administrative centre of the Crown, only to be overtaken by Berlin, wrested from Prussian control by the Bavarians, shortly before the dynastic union between the Crown of Prussia and the Crown of Bavaria in 1871. Munich became the centre of Bavarian separatism, briefly becoming part of Austria during the 19th century War of the Bavarian Succession and again in 1918 until 1919 under Soviet influence. It was the capital of Revolutionary Bavaria during the German Revolution of 1918, and the seat of government of the Weimar Republic later in the German Revolution, until its capture by the Nazis in 1933. After the German transition to democracy in the 1940s, Munich once again became the capital of an autonomous Bavaria.",
  paris:
    "The City of Paris is the centre of the Île-de-France region, or Paris Region, with an official estimated population of 12,271,794 inhabitants on 1 January 2023, or about 19% of the population of France.The Paris Region had a GDP of €765 billion (US$1.064 trillion, PPP) in 2021, the highest in the European Union. According to the Economist Intelligence Unit Worldwide Cost of Living Survey, in 2022, Paris was the city with the ninth-highest cost of living in the world.Paris is a major railway, highway, and air-transport hub served by two international airports: Charles de Gaulle Airport (the third-busiest airport in Europe) and Orly Airport. Opened in 1900, the city's subway system, the Paris Métro, serves 5.23 million passengers daily. it is the second-busiest metro system in Europe after the Moscow Metro. Gare du Nord is the 24th-busiest railway station in the world and the busiest outside Japan, with 262 million passengers in 2015. Paris has one of the most sustainable transportation systems and is one of the only two cities in the world that received the Sustainable Transport Award twice.",
  london:
    "London is the capital and largest city of England, and the United Kingdom, with a population of around million, and its metropolitan area is the largest in Western Europe, with a population of million. It stands on the River Thames in south-east England at the head of a 50-mile estuary down to the North Sea and has been a major settlement for nearly two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries. The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. In the century, London grew rapidly, becoming the world's largest city at the time, as it expanded and absorbed the neighbouring county of Middlesex, and parts of Surrey and Kent. In it was combined with parts of Essex and Hertfordshire to create the administrative area of Greater London, which is governed by local authorities and the Greater London Authority.As one of the world's major global cities, London exerts a strong influence on world art, entertainment, fashion, commerce and finance, education, health care, media, science and technology, tourism, transport, and communications. Despite a post-Brexit exodus of stock listings from the London Stock Exchange, London is still Europe's most economically powerful city, and it remains one of the major financial centres in the world. With Europe's largest concentration of higher education institutions, it is home to some of the highest-ranked academic institutions in the world—Imperial College London in natural and applied sciences, the London School of Economics in social sciences, and the comprehensive University College London. London is the most visited city in Europe and has the busiest city airport system in the world. The London Underground is the oldest rapid transit system in the world.",
  barcelona:
    "Founded as a Roman city, in the Middle Ages Barcelona became the capital of the County of Barcelona. After joining with the Kingdom of Aragon to form the confederation of the Crown of Aragon, Barcelona, which continued to be the capital of the Principality of Catalonia, became the most important city in the Crown of Aragon and the main economic and administrative centre of the Crown, only to be overtaken by Valencia, wrested from Moorish control by the Catalans, shortly before the dynastic union between the Crown of Castile and the Crown of Aragon in Barcelona became the centre of Catalan separatism, briefly becoming part of France during the 17th century Reapers' War and again in until under Napoleon. It was the capital of Revolutionary Catalonia during the Spanish Revolution of , and the seat of government of the Second Spanish Republic later in the Spanish Civil War, until its capture by the fascists in . After the Spanish transition to democracy in the s, Barcelona once again became the capital of an autonomous Catalonia.Barcelona has a rich cultural heritage and is today an important cultural centre and a major tourist destination. Particularly renowned are the architectural works of Antoni Gaudí and Lluís Domènech i Montaner, which have been designated UNESCO World Heritage Sites. The city is home to two of the most prestigious universities in Spain: the University of Barcelona and Pompeu Fabra University. The headquarters of the Union for the Mediterranean are located in Barcelona. The city is known for hosting the Summer Olympics as well as world-class conferences and expositions. In addition, many international sport tournaments have been played here.",
  rome: "Rome's history spans centuries. While Roman mythology dates the founding of Rome at around BC, the site has been inhabited for much longer, making it a major human settlement for almost three millennia and one of the oldest continuously occupied cities in Europe. The city's early population originated from a mix of Latins, Etruscans, and Sabines. Eventually, the city successively became the capital of the Roman Kingdom, the Roman Republic, and the Roman Empire, and is regarded by many as the first-ever Imperial city and metropolis. It was first called The Eternal City by the Roman poet Tibullus in the century BC, and the expression was also taken up by Ovid, Virgil, and Livy. Rome is also called (Capital of the World).After the fall of the Empire in the west, which marked the beginning of the Middle Ages, Rome slowly fell under the political control of the Papacy, and in the century, it became the capital of the Papal States, which lasted until . Beginning with the Renaissance, almost all popes since Nicholas V pursued a coherent architectural and urban programme over four hundred years, aimed at making the city the artistic and cultural centre of the world. In this way, Rome first became one of the major centres of the Renaissance and then became the birthplace of both the Baroque style and Neoclassicism. Famous artists, painters, sculptors, and architects made Rome the center of their activity, creating masterpieces throughout the city. In , Rome became the capital of the Kingdom of Italy, which, in , became the Italian Republic.",
  tokyo:
    "Tokyo, officially the Tokyo Metropolis (東京都, Tōkyō-to), is the capital of Japan and one of the most populous cities in the world with a population of over 14 million residents as of 2023. The Tokyo metropolitan area, which includes Tokyo and nearby prefectures, is the world's most populous metropolitan area, with 40.8 million residents as of 2023, and is the second-largest metropolitan economy in the world after New York, with a gross metropolitan product estimated at US$2.08 trillion (US$51,124 per capita).Located at the head of Tokyo Bay, Tokyo is part of the Kantō region on the central coast of Honshu, Japan's largest island. Tokyo serves as Japan's economic center and the seat of both the Japanese government and the Emperor of Japan. The Tokyo Metropolitan Government administers Tokyo's central 23 special wards (which formerly made up Tokyo City), various commuter towns and suburbs in its western area, and two outlying island chains known as the Tokyo Islands. Despite most of the world knowing Tokyo as a city, since 1943 its governing structure has been more akin to a prefecture, with an accompanying Governor and Assembly taking precedence over the smaller municipal governments which make up the metropolis.Prior to the 17th century, Tokyo was predominantly a fishing village and was named Edo. In 1603, however, the city ascended to political prominence after being named the seat of the Tokugawa shogunate. By the mid-18th century, Edo emerged as one of the world's most populous cities with a population of over one million people. Following the Meiji Restoration in 1868, the imperial capital in Kyoto was moved to Edo, and the city was renamed Tokyo ('Eastern Capital'). In 1923, Tokyo was damaged substantially by the Great Kantō earthquake, and the city was later badly damaged by allied bombing raids during World War II in retaliation for Japan's attack on Pearl Harbor. Beginning in the mid-20th century, Tokyo underwent rapid reconstruction and expansion that contributed to the era's so-called Japanese economic miracle in which Japan's economy propelled to the second-largest in the world behind that of the United States. Tokyo is also part of an industrial region that spans from Yokohama and Kawasaki to Chiba. As of 2023, the city is home to of the world's largest companies listed in the annual Fortune Global 500.",
  newYork:
    "New York, often called New York City or simply NYC, is the most populous city in the United States, located at the southern tip of New York State on one of the world's largest natural harbors. The city comprises five boroughs, each of which is coextensive with a respective county. It is a global city and a cultural, financial, high-tech, entertainment, and media center with a significant influence on commerce, healthcare, scientific output, life sciences, research, technology, education, politics, tourism, dining, art, fashion, and sports. Home to the headquarters of the United Nations, New York is an important center for international diplomacy and is sometimes described as the world's most important city and the capital of the world.With an estimated population in 2022 of 8,335,897 distributed over square miles, the city is the most densely populated major city in the United States. New York has more than double the population of Los Angeles, the nation's second-most populous city. New York is the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the U.S. by both population and urban area. With more than 20.1 million people in its metropolitan statistical area and 23.5 million in its combined statistical area as of 2020, New York City is one of the world's most populous megacities. The city and its metropolitan area are the premier gateway for legal immigration to the United States. As many as 800 languages are spoken in New York, making it the most linguistically diverse city in the world. In 2021, the city was home to nearly 3.1 million residents born outside the U.S., the largest foreign-born population of any city in the world.New York City traces its origins to Fort Amsterdam and a trading post founded on the southern tip of Manhattan Island by Dutch colonists in approximately 1624. The settlement was named New Amsterdam (Dutch: Nieuw Amsterdam) in 1626 and was chartered as a city in 1653. The city came under English control in 1664 and was renamed New York after King Charles II granted the lands to his brother, the Duke of York. The city was temporarily regained by the Dutch in July 1673 and was renamed New Orange; however, the city has been named New York since November 1674. New York City was the capital of the United States from 1785 until 1790. The modern city was formed by the 1898 consolidation of its five boroughs: Manhattan, Brooklyn, Queens, The Bronx, and Staten Island, and has been the largest U.S. city ever since.",
  sydney:
    "Sydney is the capital city of the state of New South Wales and the most populous city in Australia. Located on Australia's east coast, the metropolis surrounds Sydney Harbour and extends about 80 km from the Pacific Ocean in the east to the Blue Mountains in the west, and about 80 km from the Ku-ring-gai Chase National Park and the Hawkesbury River in the north and north-west, to the Royal National Park and Macarthur in the south and south-west. Greater Sydney consists of suburbs, spread across local government areas. Residents of the city are colloquially known as Sydneysiders. The estimated population in June 2023 was 5,450,496, which is about 66% of the state's population. The city's nicknames include the Emerald City and the Harbour City.Aboriginal Australians have inhabited the Greater Sydney region for at least 30,000 years, and their engravings and cultural sites are common. The traditional custodians of the land on which modern Sydney stands are the clans of the Darug, Dharawal, and Eora peoples. During his first Pacific voyage in 1770, James Cook charted the eastern coast of Australia, making landfall at Botany Bay. In 1788, the First Fleet of convicts, led by Arthur Phillip, founded Sydney as a British penal colony, the first European settlement in Australia. After World War II, Sydney experienced mass migration and by 2021 over 40 per cent of the population was born overseas.Foreign countries of birth with the greatest representation are mainland China, India, the United Kingdom, Vietnam, and the Philippines. Despite being one of the most expensive cities in the world, Sydney frequently ranks in the top ten most liveable cities. It is classified as an Alpha city by the Globalization and World Cities Research Network, indicating its influence in the region and throughout the world. Ranked eleventh in the world for economic opportunity, Sydney has an advanced market economy with strengths in education, finance, manufacturing, and tourism. The University of Sydney and the University of New South Wales are ranked equal 19th in the world.",
  rio: "Rio de Janeiro, or simply Rio, is the capital of the state of Rio de Janeiro. It is the second-most-populous city in Brazil (after São Paulo) and the sixth-most-populous city in the Americas.Founded in 1565 by the Portuguese, the city was initially the seat of the Captaincy of Rio de Janeiro, a domain of the Portuguese Empire. In 1763, it became the capital of the State of Brazil, a state of the Portuguese Empire. In 1808, when the Portuguese Royal Court moved to Brazil, Rio de Janeiro became the seat of the court of Queen Maria I of Portugal. She subsequently, under the leadership of her son the prince regent John VI of Portugal, raised Brazil to the dignity of a kingdom, within the United Kingdom of Portugal, Brazil, and Algarves. Rio remained as the capital of the pluricontinental monarchy until 1822, when the Brazilian War of Independence began. This is one of the few instances in history that the capital of a colonizing country officially shifted to a city in one of its colonies. Rio de Janeiro subsequently served as the capital of the independent monarchy, the Empire of Brazil, until 1889, and then the capital of a republican Brazil until 1960 when the capital was transferred to Brasília. Rio de Janeiro has the second largest municipal GDP in the country, and 30th-largest in the world in 2008. This is estimated at R$343 billion. In the city are the headquarters of Brazilian oil, mining, and telecommunications companies, including two of the country's major corporations, Petrobras and Vale, and Latin America's largest telemedia conglomerate, Grupo Globo. The home of many universities and institutes, it is the second-largest center of research and development in Brazil, accounting for 17 percent of national scientific output according to 2005 data. Despite the high perception of crime, the city actually has a lower incidence of crime than most state capitals in Brazil.",
  capeTown:
    "Cape Town is the legislative capital of South Africa. It is the country's oldest city and the seat of the Parliament of South Africa. It is the country's second-largest city, after Johannesburg, and the largest in the Western Cape. The city is part of the City of Cape Town metropolitan municipality.The city is known for its harbour, its natural setting in the Cape Floristic Region, and for landmarks such as Table Mountain and Cape Point. In 2014, Cape Town was named the best place in the world to visit by The New York Times and similarly by The Daily Telegraph in 2016. Located on the shore of Table Bay, the City Bowl area of Cape Town is the oldest urban area in the Western Cape, with a significant cultural heritage. It was founded by the Dutch East India Company (VOC) as a supply station for Dutch ships sailing to East Africa, India, and the Far East. Jan van Riebeeck's arrival on 6 April 1652 established the VOC Cape Colony, the first permanent European settlement in South Africa. Cape Town outgrew its original purpose as the first European outpost at the Castle of Good Hope, becoming the economic and cultural hub of the Cape Colony. Until the Witwatersrand Gold Rush and the development of Johannesburg, Cape Town was the largest city in southern Africa.",
};

const cities = [
  { name: "Munich", country: "Germany", image: cityImages.munich },
  { name: "Paris", country: "France", image: cityImages.paris },
  { name: "London", country: "United Kingdom", image: cityImages.london },
  { name: "Rome", country: "Italy", image: cityImages.rome },
  { name: "Barcelona", country: "Spain", image: cityImages.barcelona },
  { name: "Tokyo", country: "Japan", image: cityImages.tokyo },
  {
    name: "New York City",
    country: "United States",
    image: cityImages.newYork,
  },
  { name: "Sydney", country: "Australia", image: cityImages.sydney },
  { name: "Rio de Janeiro", country: "Brazil", image: cityImages.rio },
  { name: "Cape Town", country: "South Africa", image: cityImages.capeTown },
];

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleSearch = (text) => {
    const query = text.toLowerCase();
    const filtered = cities.filter(
      (city) =>
        city.name.toLowerCase().includes(query) ||
        city.country.toLowerCase().includes(query)
    );
    setFilteredCities(filtered);
    setSearchQuery(text);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: "center" }}
      showsVerticalScrollIndicator={true}
    >
      <View style={{ width: "90%" }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
            padding: 5,
          }}
          placeholder="Search cities..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
        {filteredCities.map((city) => (
          <TouchableOpacity
            key={city.name}
            onPress={() => navigation.navigate("City", { city: city.name })}
          >
            <CityCard
              city={city.name}
              country={city.country}
              image={{ uri: city.image }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  cityContent: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 10,
    marginLeft: 15,
  },
};

const CityScreen = ({ route }) => {
  const { city } = route.params;
  const selectedCity = cities.find((c) => c.name === city);

  return (
    <ScrollView>
      <View>
        <Image
          source={{ uri: selectedCity.image }}
          style={{ width: "100%", height: 200 }} // Adjust the height as needed
        />
        <Text
          style={{
            fontSize: 24,
            lineHeight: 24,
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          {selectedCity.name}
        </Text>
        <Text
          style={{
            fontSize: 24,
            lineHeight: 24,
            marginVertical: 10,
            marginLeft: 10,
          }}
        >
          Country: {selectedCity.country}
        </Text>
        <Text style={styles.cityContent}>
          {cityContent[selectedCity.name.toLowerCase()]}
        </Text>
        {/* Add more details about the city */}
      </View>
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="City" component={CityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
