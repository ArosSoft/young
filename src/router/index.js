import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue' // ������ ���������� ��� �������� ��������
import AboutPage from '../views/AboutPage.vue' // ������ ���������� ��� �������� "� ���"
import TheWelcome from '../components/TheWelcome.vue' // ������ ���������� ��� �������� "����� ����������"
import Neuroart from '../components/Neuroart.vue' // ������ ���������� ��� �������� "�����-���"
import Graffiti from '../components/Graffiti.vue' // ������ ���������� ��� �������� "�������"

// �������� ������� � �������������� ������� �� ������ ����
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), // ������������� ���-������ ��� ������� ���������
    routes: [
        {
            path: '/', // ������� ��� �������� ��������
            name: 'home', // ��� ��������
            component: HomePage // ���������, ������� ����� ������������
        },
        {
            path: '/about', // ������� ��� �������� "� ���"
            name: 'about', // ��� ��������
            component: AboutPage // ���������, ������� ����� ������������
        },
        {
            path: '/welcome', // ������� ��� �������� "����� ����������"
            name: 'welcome', // ��� ��������
            component: TheWelcome // ���������, ������� ����� ������������
        },
        {
            path: '/neuroart', // ������� ��� �������� "�����-���"
            name: 'neuroart', // ��� ��������
            component: Neuroart // ���������, ������� ����� ������������
        },
        {
            path: '/graffiti', // ������� ��� �������� "��������"
            name: 'graffiti', // ��� ��������
            component: Graffiti // ���������, ������� ����� ������������
        }
    ]
})

// ������� ������� ��� ������������� � ����������
export default router