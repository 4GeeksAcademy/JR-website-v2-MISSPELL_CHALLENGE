import React, {useState, useEffect, useContext, useRef} from 'react';
import Link from 'gatsby-link'
// import {GeekCard} from '../components/Card'
import {Container, GridContainer, Header, Div} from '../new_components/Sections'
// import {H1, H2, Title, Paragraph, H5} from '../new_components/Heading'
import {Button, Colors} from '../new_components/Styling'
import ProgramDetails from '../new_components/ProgramDetails';
import ProgramDetailsMobile from '../new_components/ProgramDetailsMobile';
import TechsWeTeach from '../new_components/TechsWeTeach';
import GeeksInfo from '../new_components/GeeksInfo';
import OurPartners from '../new_components/OurPartners';
import BaseRender from './_baseLayout'
import Modal from '../new_components/Modal';
import LeadForm from '../new_components/LeadForm';
import {requestSyllabus} from "../actions";
import {SessionContext} from '../session'
import {Circle} from '../new_components/BackgroundDrawing'
import Icon from '../new_components/Icon'
import Testimonials from '../new_components/Testimonials';
import Badges from '../new_components/Badges';
import PricesAndPayment from '../new_components/PricesAndPayment';



const Program = ({data, pageContext, yml}) => {

  const {session} = React.useContext(SessionContext);
  const courseDetails = data.allCourseYaml.edges[0].node;
  const geek = data.allCourseYaml.edges[0].node;
  const [open, setOpen] = React.useState(false);

  const course_type = "software_engineering"
  const program_type = yml.meta_info.slug.includes("full-time") ? "full_time" : "part_time"
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hiring = data.allPartnerYaml.edges[0].node;

  const apply_button_text = session && session.location ? session.location.button.apply_button_text : "Apply";
  const syllabus_button_text = session && session.location ? session.location.button.syllabus_button_text : "Download Syllabus";

  return (<>
    <Header
      seo_title={yml.seo_title}
      title={yml.header.title}
      paragraph={yml.header.paragraph}
      padding_tablet="72px 0 40px 0"
      position="relative"
    >
      <Circle color="yellow" width="17px" height="17px" top="0" left="74px" zIndex="1" display="none" display_tablet="inline" opacity="0.2" />
      <Circle color="grey" width="17px" height="17px" top="0" left="106px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="black" width="17px" height="17px" top="32px" left="106px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="black" width="17px" height="17px" top="32px" left="74px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="grey" width="17px" height="17px" top="67px" left="74px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="grey" width="17px" height="17px" top="102px" left="74px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="grey" width="17px" height="17px" top="137px" left="106px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="grey" width="17px" height="17px" top="172px" left="106px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="blue" width="17px" height="17px" top="216px" left="74px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="grey" width="17px" height="17px" top="271px" left="106px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="red" width="27px" height="27px" top="222px" left="278px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="yellow" width="250px" height="250px" bottom="20px" right="-68px" opacity="0.2" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="grey" width="17px" height="17px" top="120px" right="50px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="black" width="17px" height="17px" top="120px" right="89px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="grey" width="17px" height="17px" top="120px" right="128px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="black" width="119px" height="11px" border="10px" bottom="115px" right="40px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="black" width="77px" height="11px" border="10px" bottom="115px" right="175px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="yellow" width="116px" height="116px" bottom="50px" left="-58px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="yellow" width="116px" height="116px" bottom="200px" left="-90px" zIndex="1" display="inline" display_tablet="none" />
      <Circle color="yellow" width="21px" height="21px" top="10px" right="320px" zIndex="1" display="none" display_tablet="inline" />
      <Circle color="blue" width="57px" height="57px" top="32px" right="61px" display="none" display_tablet="inline" />
      <Circle color="yellow" width="160px" height="160px" top="0" right="-120px" opacity="0.2" display="inline" display_tablet="none" />
      <Circle color="red" width="25px" height="25px" top="60px" right="30px" display="inline" display_tablet="none" />
      <Div flexDirection_md="row" flexDirection="column" alignItems="center" justifyContent="center" margin_tablet="0 0 50px 0">
        <Link to={yml.button.apply_button_link}
          state={{course: yml.meta_info.bc_slug}}
        >
          <Button variant="full" width="fit-content" color={Colors.blue} padding="13px 24px" margin="10px 24px 10px 0" textColor="white">{apply_button_text}</Button>
        </Link>
        <Button onClick={handleOpen} variant="outline" icon={<Icon icon="download" stroke={Colors.black} style={{marginRight: "10px"}} width="46px" height="46px" />} color={Colors.black} margin="10px 0 50px 0" margin_tablet="0" textColor={Colors.black}>{syllabus_button_text}</Button>
        {/* <Button onClick={handleOpen} variant="outline" width="200px" color={Colors.black} margin="10px 0 58px 0" textColor={Colors.black}>{syllabus_button_text}</Button> */}
        {/* <Button onClick={handleOpen} variant="outline" icon={<Icon icon="download" stroke={Colors.black} style={{marginRight: "10px"}} width="46px" height="46px" />} color={Colors.black} margin="10px 0 50px 0" margin_tablet="0" textColor={Colors.black}>{syllabus_button_text}</Button> */}
      </Div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <LeadForm
          style={{marginTop: "50px"}}
          heading={yml.button.syllabus_heading}
          motivation={yml.button.syllabus_motivation}
          sendLabel={syllabus_button_text}
          formHandler={requestSyllabus}
          handleClose={handleClose}
          lang={pageContext.lang}
          data={{
            course: {type: "hidden", value: yml.meta_info.bc_slug, valid: true}
          }}
        />
      </Modal>
      <Badges lang={pageContext.lang} short_link={true} paragraph={yml.badges.paragraph && yml.badges.paragraph} />
    </Header>

    {/* 
    this is the one used in home
    <OurPartners images={hiring.partners.images} marquee title={hiring.partners.tagline} paragraph={hiring.partners.sub_heading} />
    */}
    <OurPartners background={Colors.verylightGray} images={hiring.partners.images} marquee title={hiring.partners.tagline} paragraph={hiring.partners.sub_heading}></OurPartners>
    <ProgramDetails details={courseDetails.details} lang={pageContext.lang} course={program_type} background={Colors.white} />
    <ProgramDetailsMobile details={courseDetails.details} lang={pageContext.lang} course={program_type} />
    <TechsWeTeach lang={pageContext.lang} />
    <GeeksInfo lang={pageContext.lang} />

    <GridContainer padding_tablet="0" margin_tablet="0 0 62px 0">
      <Div height="1px" background="#EBEBEB"></Div>
    </GridContainer>

    <PricesAndPayment
      type={pageContext.slug}
      lang={pageContext.lang}
      session={session}
      locations={data.allLocationYaml.edges}
      programType={program_type}
      courseType={course_type}
      title={yml.prices.heading}
      paragraph={yml.prices.sub_heading}
    />

    <Container variant="fluid" background="linear-gradient(#f5f5f5, white)" height="425px" padding="48px 0 36px 0" margin="50px 0">
      <Testimonials lang={data.allTestimonialsYaml.edges} />
    </Container>

    <OurPartners images={hiring.partners.images} marquee></OurPartners>
  </>
  )
};

export const query = graphql`
  query CourseEngineeringQuery($file_name: String!, $lang: String!) {
    allCourseYaml(filter: { fields: { file_name: { eq: $file_name }, lang: { eq: $lang }}}) {
      edges{
        node{
          seo_title
          header{
              title
              paragraph
              image_alt
              image{
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100, srcSetBreakpoints: [ 200, 340, 520, 890 ]){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              
          }
            button{
              syllabus_heading
              syllabus_motivation
              apply_button_link
            }
            meta_info{
                title
                description
                image
                keywords
                slug
                bc_slug
            }
            geek_data {
              heading
              geek_force
              geek_pal
            }
            badges{
              paragraph
            }
            credentials{
              heading
              paragraph
            }
            details {
              about{
                title
                sub_title
                list{
                  label
                  content
                }
              }
              heading
              sub_heading
              left_labels{
                description
                projects
                duration
                skills
              }
              details_modules {
                title
                projects
                slug
                module_name
                duration
                description
                step
              }
            }
            syllabus{
              heading
              button_label
            }
            potential_companies{
              tagline
              sub_heading
              companies{
                name
                image{
                  childImageSharp {
                    fluid(maxWidth: 100){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            geeks_vs_others{
              heading
              sub_heading
              sub_heading_link
          }
            prices{
              heading
              sub_heading
            }
            typical{
              heading
              sub_heading
              schedule{
                title
                time
                icon
                content
              }
            }
            alumni{
              heading
              sub_heading
            }
            sidebar{
              membership
              program
              geeks_vs_other
              pricing
              alumni
            }
        }
      }
    }
    allPartnerYaml(filter: { fields: { lang: { eq: $lang }}}) {
      edges {
          node {
            partners {
              tagline
              sub_heading
              footer_tagline
              footer_button
              footer_link
              images {
                name
                image {
                  childImageSharp {
                    fluid(maxWidth: 150){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                featured
              }
            }
            coding {
              images {
                name
                image {
                  childImageSharp {
                    fluid(maxWidth: 100){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                featured
              }
              tagline
              sub_heading
            }
            influencers {
              images {
                name
                image {
                  childImageSharp {
                    fluid(maxWidth: 100){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                featured
              }
              tagline
              sub_heading
            }
            financials {
              images {
                name
                image {
                  childImageSharp {
                    fluid(maxWidth: 100){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                featured
              }
              tagline
              sub_heading
            }
          }
        }
      }
    allTestimonialsYaml(filter: { fields: { lang: { eq: $lang }}}) {
      edges {
        node {
          heading
    button_text
    button_link
          testimonials {
            student_name
            testimonial_date
            hidden
            linkedin_url
            linkedin_text
            linkedin_image{
              childImageSharp {
                fluid(maxHeight: 14){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            student_thumb{
              childImageSharp {
                fluid(maxHeight: 200){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            short_content
            content
            source_url
            source_url_text
          }
        }
      }
    }
    allAlumniProjectsYaml(filter: { fields: { lang: { eq: $lang }}}){
      edges {
        node {
          header{
            tagline
            sub_heading
          }
          projects {
              project_name
              slug
              project_image {
                childImageSharp {
                  fluid(maxWidth: 800){
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              } 
              project_content
              project_video
              live_link
              github_repo
              alumni {
                first_name
                last_name
                job_title
                github
                linkedin
                twitter
              }
            }
          button_section{
            button_text
            button_link
          }
        }
      }
    }
    allCredentialsYaml(filter: { fields: { lang: { eq: $lang }}}) {
      edges {
        node {
          credentials {
            title
            icon
            value
          }
        }
      }
    }
    allLocationYaml(filter: {fields: { lang: {eq: $lang}}, meta_info: { unlisted: {ne: true }}}){
      edges {
        node {
          id
          city
          country
          hasFinancialsOption
          financials_max_months
          active_campaign_location_slug
          breathecode_location_slug
          fields{
            lang
          }
          meta_info {
            slug
            description
            image
            position
            unlisted
            keywords
            redirects
          }
          header{
            sub_heading
            tagline
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            } 
          }
          
          prices {
            software_engineering {
              part_time {
                center_section {
                  button {
                    button_text
                  }
                  header {
                    heading_two
                    sub_heading
                    heading_one
                  }
                  plans {
                    months
                    monthsInfo
                    payment
                    paymentInfo
                    provider
                    logo
                    message
                  }
                }
                left_section {
                  button {
                    button_text
                  }
                  content {
                    price
                    price_info
                  }
                  header {
                    heading_one
                    sub_heading
                    heading_two
                  }
                }
                right_section {
                  button {
                    button_text
                  }
                  content {
                    price
                    price_info
                  }
                  header {
                    heading_one
                    sub_heading
                    heading_two
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default BaseRender(Program);