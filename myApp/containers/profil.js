import * as React from 'react'
import { StyleSheet, ScrollView, Linking, Image, Dimensions } from "react-native"
import { Layout, Button, Text, Input, useTheme, Modal } from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'
import axios from 'axios';
import { ProfilImage } from '../components/profil.image';
import {ProfilInfo} from '../components/profil.infoSection'
import { ProfilUpdate } from '../components/profil.update';




export const Profil = ()=>{


    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
            <ProfilUpdate/>
            <ProfilImage/>
            <ProfilInfo/>
        </ScrollView>

    )
}