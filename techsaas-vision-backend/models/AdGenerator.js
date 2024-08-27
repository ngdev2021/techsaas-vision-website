// AdGenerator.js

const generateAd = async (title, description, adType, tone, url) => {
  const response = await axios.post(
    'http://localhost:5000/api/ad/generate',
    {
      title,
      description,
      adType,
      tone,
      url,
    }
  );
  return response.data.ad;
};

// Inside the `fetchData` function after generating the ad
const generatedAd = await generateAdText(title, description);
await generateAd(title, description, adType, tone, formattedUrl);
