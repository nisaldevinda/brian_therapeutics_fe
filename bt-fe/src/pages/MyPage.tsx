import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";

const MyPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Text variant="h1" color="text-blue-700">
        At Bryan Therapeutics, our mission is to perfect clinical therapies for
        safe and effective use, so they can be used to deliver life changing
        outcomes to people around the world.
      </Text>

      <Text variant="h2" color="text-gray-800">
        At Bryan Therapeutics, our mission is to perfect clinical therapies for
        safe and effective use, so they can be used to deliver life changing
        outcomes to people around the world.
      </Text>
      <Text variant="h3" color="text-gray-800">
        At Bryan Therapeutics, our mission is to perfect clinical therapies for
        safe and effective use, so they can be used to deliver life changing
        outcomes to people around the world.
      </Text>
      <Text variant="h4" color="text-gray-800">
        At Bryan Therapeutics, our mission is to perfect clinical therapies for
        safe and effective use, so they can be used to deliver life changing
        outcomes to people around the world.
      </Text>

      <Text variant="body1">
        At Bryan Therapeutics, our mission is to perfect clinical therapies for
        safe and effective use, so they can be used to deliver life changing
        outcomes to people around the world.
      </Text>
      <Text variant="body2">
        At Bryan Therapeutics, our mission is to perfect clinical therapies for
        safe and effective use, so they can be used to deliver life changing
        outcomes to people around the world.
      </Text>

      <Text
        variant="body2"
        color="text-gray-600"
        align="justify"
        className="mt-4"
      >
        Additional information with custom spacing and text justification.
      </Text>

      <Text variant="body3" color="text-gray-500">
        Small print or footnote text.
      </Text>
      <Button variant="button1">Learn More</Button>
      <Button variant="button2" color="text-blue-500">
        Send Message
      </Button>
      <Button variant="button3" bgColor="bg-blue-500" color="text-white">
        Submit Form
      </Button>
      <Button variant="button4" bgColor="bg-gray-100">
        Simple Button
      </Button>
    </div>
  );
};

export default MyPage;
