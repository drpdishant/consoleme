import { Header, Icon, Image, Segment } from "semantic-ui-react";

const NoMatch = ({ location }) => (
  <Segment
    basic
    style={{
      paddingTop: "120px",
      marginTop: "72px",
      marginLeft: "240px",
    }}
    textAlign="center"
  >
    <Header
      as="h1"
      color="grey"
      style={{
        fontSize: "74px",
      }}
      textAlign="center"
    >
      404
      <Header.Subheader>We were unable to console you!</Header.Subheader>
    </Header>
    <Image
      centered
      disabled
      size="medium"
      src="/static/images/logos/quarantine/1.png"
    />
  </Segment>
);

export default NoMatch;
