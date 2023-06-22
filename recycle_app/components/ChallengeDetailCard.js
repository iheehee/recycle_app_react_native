import React from "react";
import Pt from "prop-types";
import styled from "styled-components/native";
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

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
  font-size: 22%;
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
  line-height: 20%;
  color: white;
`;

const ChallengeSummery = styled.Text`
  margin-top: 15px;
  line-height: 20;
`;

const ChallengeDescription = styled.Text`
  margin-top: 25;
  line-height: 20;
`;

const Detail = ({
  banner,
  title,
  duration,
  frequency,
  max_member,
  applied_member,
  start_day,
  summery,
  description,
  notice,
}) => {
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
            <MemberText>{`현재 ${applied_member}명`}</MemberText>
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
          <Swiper
            height={300}
            width={width * 0.9}
            from={1}
            minDistanceForAction={0.1}
            controlsProps={{
              dotsTouchable: true,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20,20,200,0.3)",
              }}
            >
              <Text>Slide 1</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(20,200,20,0.3)",
                position: "relative",
              }}
            >
              <Text>Slide 2</Text>
              <View style={{ zIndex: 1 }}>
                <View
                  style={{
                    height: 41,
                    backgroundColor: "white",
                    width: "200%",
                    position: "absolute",
                    transform: [{ translateX: -200 }, { translateY: 101 }],
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(200,20,20,0.3)",
              }}
            >
              <Text>Slide 3</Text>
            </View>
          </Swiper>
        </View>
      </BgContainer>
    </ScrollView>
  );
};

export default Detail;
