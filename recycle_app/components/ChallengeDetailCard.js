import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import { Dimensions, Image, Text, ScrollView, View } from "react-native";
import { MaterialCommunityIcons, Entypo, Feather } from "@expo/vector-icons";


const { width, height } = Dimensions.get("screen");

const BgContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: white;
`;

const DivisionLine = styled.View`
  background-color: #e5e5e5;
  padding: 3px;
`;

const HeaderContainer = styled.View`
  margin: 15px;
`;

const TitleContainer = styled.Text`
  margin: 16px 0px 0px 6px;
  font-size: 22px;
  font-weight: 600;
`;

const BannerContainer = styled.View`
  align-items: center;
`;
const DurationContainer = styled.View`
  width: 16%;
  padding: 3px;
  background-color: #d8d8d8;
  border-radius: 5px;
`;
const FrequencyContainer = styled.View`
  width: 12%;
  padding: 3px;
  background-color: #d8d8d8;
  border-radius: 5px;
  margin-left: 7px;
`;
const DFContainer = styled.View`
  flex-direction: row;
  margin: 15px 0px 6px 6px;
`;
const MemberContainer = styled.View`
  flex-direction: row;
  margin: 16px 0px 5px 6px;
  align-items: center;
`;
const MemberText = styled.Text`
  margin-left: 2px;
  font-size: 15px;
`;

const DescriptionContainer = styled.View`
  margin: 20px;
`;
const Suggestion = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const NoticeContainer = styled.View`
  margin: 20px;
`;

const NoticeTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;
const NoticeDescriptionBox = styled.View`
  background-color: #202833;
  border-radius: 8px;
  margin-top: 18px;
`;

const NoticeDescription = styled.Text`
  padding: 10px;
  margin: 4px;
  line-height: 20px;
  color: white;
`;

const ChallengeSummery = styled.Text`
  margin-top: 15px;
  line-height: 20px;
`;

const ChallengeDescription = styled.Text`
  margin-top: 25px;
  line-height: 20px;
`;
const PhotoBar = styled.View`
  height: ${height * 0.035}px;
  width: ${width * 0.9}px;
  background-color: ${(props) => (props.success ? "#40e0d0" : "#FA8072")};
  position: absolute;
`;

const ChallengeDetailCard = ({ route }) => {
  const {
    id,
    title,
    banner,
    duration,
    frequency,
    member,
    count_member,
    max_member,
    applied_member,
    start_day,
    summery,
    description,
    notice,
    success_example,
  } = route.params;

  return (
    <ScrollView>
      <BgContainer>
        <BannerContainer>
          <Image
            source={{ uri: banner }}
            style={{ width: width / 1, height: height / 3.6 }}
          />
        </BannerContainer>
        <HeaderContainer>
          <TitleContainer>{title}</TitleContainer>
          <MemberContainer>
            <MaterialCommunityIcons
              name="human-child"
              size={18}
              color="black"
            />
            <MemberText>{`현재 ${count_member}명`}</MemberText>
          </MemberContainer>
          <DFContainer>
            <DurationContainer>
              <Text>{duration}</Text>
            </DurationContainer>
            <FrequencyContainer>
              <Text>{frequency}</Text>
            </FrequencyContainer>
          </DFContainer>
        </HeaderContainer>
        <DivisionLine></DivisionLine>
        <DescriptionContainer>
          <Suggestion>{"챌린지를 소개해주세요"}</Suggestion>
          <ChallengeSummery>{summery}</ChallengeSummery>
          <ChallengeDescription>{description}</ChallengeDescription>
        </DescriptionContainer>
        <DivisionLine></DivisionLine>
        <NoticeContainer>
          <NoticeTitle>{"이렇게 인증 해주세요"}</NoticeTitle>
          <NoticeDescriptionBox>
            <NoticeDescription>{notice}</NoticeDescription>
          </NoticeDescriptionBox>
        </NoticeContainer>
        <View style={{ alignItems: "center" }}>
          {/*  <Swiper
            height={height * 0.33}
            width={width * 0.9}
            controlsProps={{
              dotsTouchable: true,
            }}
            paginationStyle={{
              bottom: 55,
            }}
          >
            {success_example.map((photo) => (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  backgroundColor: "rgba(20,20,200,0.3)",
                }}
              >
                <View>
                  <PhotoBar
                    success={photo.SuccessOrFail}
                    style={{
                      transform: [{ translateX: -193 }, { translateY: 272 }],
                    }}
                  ></PhotoBar>

                  {photo.SuccessOrFail ? (
                    <View
                      style={{
                        position: "absolute",
                        transform: [{ translateX: -12 }, { translateY: 276 }],
                      }}
                    >
                      <Entypo name="circle" size={25} color="white" />
                    </View>
                  ) : (
                    <View
                      style={{
                        position: "absolute",
                        transform: [{ translateX: -12 }, { translateY: 273 }],
                      }}
                    >
                      <Feather name="x" size={29} color="white" />
                    </View>
                  )}
                </View>
                <Image
                  source={{ uri: photo.certification_photo_example }}
                  style={{
                    width: width * 0.9,
                    height: height * 0.3,
                    position: "relative",
                    zIndex: -1,
                  }}
                />
              </View>
            ))}
          </Swiper> */}
        </View>
      </BgContainer>
    </ScrollView>
  );
};

export default ChallengeDetailCard;
