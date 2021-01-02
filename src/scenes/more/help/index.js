import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Title, Paragraph, Subheading } from 'react-native-paper';
import { SCALE_16 } from '_styles/spacing';

const HelpScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <Title>1. 유치원 대장 소개</Title>
                <Paragraph>안녕하세요! 유치원 대장입니다.</Paragraph>
                <Paragraph>유치원 대장은 유치원 전반의 주요 정보를 객관적이고 투명하게 공개하는 유치원 알리미의 공시제도를 이용한 서비스입니다.</Paragraph>
                <Paragraph>학부모의 알권리를 보장하고 유치원의 실태를 정확하게 파악하여 유아 교육의 질을 높이기 위한 제도입니다.</Paragraph>
                <Title/>
                <Title>2. 정보공시항목</Title>
                <Subheading style={styles.bold}>수시</Subheading>
                <Paragraph>- 식단표, 위반내용 및 조치결과</Paragraph>
                <Subheading style={styles.bold}>4월 정시</Subheading>
                <Paragraph>- 기관 기본현황, 원장명, 설립·경영자명, 유치원 규칙, 교지·교사 등 시설현황, 연령별 학급 수·원아 수</Paragraph>
                <Paragraph>- 직위·자격별 교직원현황, 교사의 현 기관 근속연수, 교육과정 편성·운영에 관한 사항, 방과후 과정 편성·운영에 관한 사항, 수업일수 현황</Paragraph>
                <Paragraph>- 교육과정비, 방과후 과정 운영비, 특성화 활동비, 유치원 회계 예산서, 급식실시 및 급식사고 발생·처리 현황, 환경위생관리 현황</Paragraph>
                <Paragraph>- 안전점검 및 안전교육 현황, 공제회 및 보험가입 현황, 통학차량 운영 현황, 유치원 평가에 관한 사항</Paragraph>
                <Subheading style={styles.bold}>10월 정시</Subheading>
                <Paragraph>- 원장명, 설립·경영자명, 연령별 학급수·원아수, 직위·자격별 교원현황, 교사의 현 기관 근속연수, 교육과정비, 방과후 과정 운영비, 특성화 활동비</Paragraph>
                <Paragraph>- 유치원 회계 결산서, 급식실시 및 급식사고 발생· 처리 현황, 환경위생관리 현황, 안전점검 및 안전교육 현황, 공제회 및 보험가입 현황, 통학차량 운영 현황</Paragraph>
                <Title/>
                <Title>3. 유치원 원비현황</Title>
                <Paragraph>- 학부모가 부담하는 자녀의 유치원 경비를 공시하는 것으로 입학경비와 교육과정 교육비, 방과후 과정 교육비가 공시 됩니다.</Paragraph>
                <Paragraph>- 법적근거: 유아교육법 시행규칙 제6조(수업료 등의 결정 및 공고)</Paragraph>
                <Paragraph>- 입학경비: 입학금, 원복비, 기타경비 등 포함</Paragraph>
                <Paragraph>- 교육과정 교육비: 수업료, 간식비, 급식비, 교재비 및 재료비, 차량운영비, 현장학습비, 기타경비 등 포함</Paragraph>
                <Paragraph>- 방과후 과정 교육비: 수업료, 간식비, 급식비, 교재비 및 재료비, 차량운영비, 현장학습비, 기타경비 등 포함</Paragraph>
                <Title/>
                <Title>4. 제휴 및 문의 사항</Title>
                <Paragraph>제휴 및 문의 사항은 아래 연락처로 주시면 검토후 연락드리겠습니다.</Paragraph>
                <Subheading style={styles.bold}>이메일</Subheading>
                <Paragraph>dilrong@dilrong.com</Paragraph>
                <Subheading style={styles.bold}>블로그</Subheading>
                <Paragraph>https://blog.naver.com/dilrong</Paragraph>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        margin: SCALE_16
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default HelpScreen;